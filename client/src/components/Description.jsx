import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>


        <div className='flex flex-col gap-5 md:gap-14 md:flex-row item-center' >
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg'/>
            <div >
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-powered Text to Image Generator</h2>
                <p className='text-gray-600 mb-4' > Easily bring your ideas to life with our free AI image generator. Whether you need Stunning visuals or unique imagery, our tools Transform your
                    text into eye-catching images with just a few clicks. Image it, describe it,
                    and watch it come to life instantly. </p>

                <p className='text-gray-600'>
                    Simply enter your text, choose a style, and watch your AI-generated image come to life. Our AI image generator is perfect for creating
                    unique images for your blog, social media, or website. Get started today and see how easy it is to turn your ideas into stunning visuals.
                    Powered by advanced AI technology, our image generator is the perfect tool for creating unique images that stand out from the crowd.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Description