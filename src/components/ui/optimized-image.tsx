import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { getOptimizedImageUrl, generatePlaceholder } from '@/lib/image-utils'

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
  placeholder?: string
  sizes?: string
  priority?: boolean
  aspectRatio?: 'square' | 'video' | 'auto'
  quality?: number
}

export const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ 
    src, 
    alt, 
    className, 
    placeholder = generatePlaceholder(40, 40, 'Loading...'),
    sizes = '100vw',
    priority = false,
    aspectRatio = 'auto',
    quality = 80,
    ...props 
  }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isInView, setIsInView] = useState(priority)
    const [error, setError] = useState(false)
    const imgRef = useRef<HTMLImageElement>(null)
    const observerRef = useRef<IntersectionObserver | null>(null)

    const imageUrls = getOptimizedImageUrl(src, { quality, format: 'auto' })

    useEffect(() => {
      if (priority) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.01
        }
      )

      if (imgRef.current) {
        observer.observe(imgRef.current)
        observerRef.current = observer
      }

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect()
        }
      }
    }, [priority])

    const handleLoad = () => {
      setIsLoaded(true)
    }

    const handleError = () => {
      setError(true)
      setIsLoaded(true)
    }

    const aspectRatioClasses = {
      square: 'aspect-square',
      video: 'aspect-video',
      auto: ''
    }

    return (
      <div 
        className={cn(
          'relative overflow-hidden',
          aspectRatioClasses[aspectRatio],
          className
        )}
        ref={imgRef}
      >
        {/* Placeholder */}
        {!isLoaded && (
          <div 
            className="absolute inset-0 bg-muted animate-pulse"
            style={{
              backgroundImage: `url(${placeholder})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        )}

        {/* Optimized Image */}
        {isInView && !error && (
          <img
            ref={ref}
            src={imageUrls.fallback}
            alt={alt}
            className={cn(
              'w-full h-full object-cover transition-opacity duration-300',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={handleLoad}
            onError={handleError}
            {...props}
          />
        )}

        {/* Error fallback */}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
    )
  }
)

OptimizedImage.displayName = 'OptimizedImage' 