import { useState, forwardRef } from 'react'
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, fallBack: customFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setfallBack] = useState('')

    const handleErrorImg = () => {
        setfallBack(customFallBack)
    }

    return <img
        ref={ref}
        src={fallBack || src}
        alt={alt} {...props}
        onError={handleErrorImg}
    />;
})

export default Image;