'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useScrollAnimation = (
  animationClass: string,
  options: ScrollAnimationOptions = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true
  } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return {
    ref: elementRef,
    className: `animate-hidden ${isVisible ? animationClass : ''}`,
    isVisible
  }
}

export const useStaggeredAnimation = (
  animationClass: string,
  itemCount: number,
  options: ScrollAnimationOptions = {}
) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  )

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animation of child items
          visibleItems.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 100) // 100ms delay between each item
          })

          if (triggerOnce) {
            observer.unobserve(container)
          }
        } else if (!triggerOnce) {
          setVisibleItems(new Array(itemCount).fill(false))
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(container)

    return () => {
      observer.unobserve(container)
    }
  }, [itemCount, threshold, rootMargin, triggerOnce])

  return {
    containerRef,
    getItemClassName: (index: number) => 
      `animate-hidden ${visibleItems[index] ? animationClass : ''}`,
    allVisible: visibleItems.every(item => item)
  }
}

export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const elementTop = element.offsetTop
      const elementHeight = element.offsetHeight
      const windowHeight = window.innerHeight

      // Calculate if element is in viewport
      const elementBottom = elementTop + elementHeight
      const isInViewport = scrolled + windowHeight > elementTop && scrolled < elementBottom

      if (isInViewport) {
        const yPos = -(scrolled - elementTop) * speed
        element.style.setProperty('--parallax-offset', `${yPos}px`)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [speed])

  return elementRef
}