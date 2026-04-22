"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

interface CanvasSequenceProps {
  scrollYProgress: MotionValue<number>;
}

export default function CanvasSequence({ scrollYProgress }: CanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const totalFrames = 240;

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameString = i.toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${frameString}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      
      loadedImages.push(img);
    }
    
    setImages(loadedImages);
  }, []);

  // Render to canvas
  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;
    
    if (imagesLoaded < 1) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const currentProgress = scrollYProgress.get() || 0;

      const frameIndex = Math.min(
        totalFrames - 1,
        Math.max(0, Math.floor(currentProgress * totalFrames))
      );

      const image = images[frameIndex];
      if (!image || !image.complete) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const scale = Math.max(canvas.width / image.width, canvas.height / image.height);
      const x = canvas.width / 2 - (image.width / 2) * scale;
      const y = canvas.height / 2 - (image.height / 2) * scale;

      ctx.drawImage(image, x, y, image.width * scale, image.height * scale);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animationFrameId);
  }, [images, imagesLoaded, scrollYProgress]);

  return (
    <div className="w-full h-full relative bg-[#050505]">
      {imagesLoaded < totalFrames && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#050505] text-white/50">
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mb-4 relative">
            <div 
              className="absolute top-0 left-0 h-full bg-[#00D6FF] transition-all duration-300"
              style={{ width: `${(imagesLoaded / totalFrames) * 100}%` }}
            />
          </div>
          <p className="text-sm uppercase tracking-widest font-mono">
            Loading Cinematic Experience: {Math.round((imagesLoaded / totalFrames) * 100)}%
          </p>
        </div>
      )}
      
      <canvas
        ref={canvasRef}
        className="block w-full h-full object-cover"
        style={{ opacity: imagesLoaded > 0 ? 1 : 0, transition: 'opacity 0.5s ease-in' }}
      />
    </div>
  );
}
