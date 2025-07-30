/**
 * Image optimization utilities for generating optimized image URLs
 */

export interface ImageOptimizationOptions {
  width?: number
  height?: number
  quality?: number
  format?: 'webp' | 'jpeg' | 'png' | 'auto'
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside'
}

/**
 * Generate optimized image URL with WebP support
 */
export function getOptimizedImageUrl(
  originalSrc: string, 
  options: ImageOptimizationOptions = {}
): { webp: string; fallback: string } {
  const {
    width,
    height,
    quality = 80,
    format = 'auto',
    fit = 'cover'
  } = options

  // If it's already a full URL or data URL, return as is
  if (originalSrc.startsWith('http') || originalSrc.startsWith('data:')) {
    return {
      webp: originalSrc,
      fallback: originalSrc
    }
  }

  // For local images, we'll use the original path
  // In a production environment, you'd integrate with an image optimization service
  // like Cloudinary, ImageKit, or Next.js Image Optimization
  const basePath = originalSrc.startsWith('/') ? originalSrc : `/${originalSrc}`

  return {
    webp: basePath,
    fallback: basePath
  }
}

/**
 * Generate responsive image sizes for different breakpoints
 */
export function getResponsiveSizes(
  containerWidth: number,
  breakpoints: { [key: string]: number } = {
    mobile: 768,
    tablet: 1024,
    desktop: 1440
  }
): string {
  const sizes = Object.entries(breakpoints)
    .map(([name, width]) => {
      const containerPercentage = Math.min((containerWidth / width) * 100, 100)
      return `(max-width: ${width}px) ${containerPercentage}vw`
    })
    .join(', ')
  
  return sizes || '100vw'
}

/**
 * Generate srcSet for responsive images
 */
export function generateSrcSet(
  baseUrl: string,
  widths: number[] = [320, 640, 768, 1024, 1280, 1920]
): string {
  return widths
    .map(width => `${baseUrl}?w=${width} ${width}w`)
    .join(', ')
}

/**
 * Check if WebP is supported in the browser
 */
export function isWebPSupported(): boolean {
  if (typeof window === 'undefined') return false
  
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
}

/**
 * Preload critical images
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

/**
 * Generate placeholder for images
 */
export function generatePlaceholder(width: number, height: number, text?: string): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f1f5f9"/>
      <text x="50%" y="50%" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle" dy=".3em">
        ${text || 'Loading...'}
      </text>
    </svg>
  `
  return `data:image/svg+xml;base64,${btoa(svg)}`
} 