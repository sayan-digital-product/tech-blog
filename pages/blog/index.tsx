import * as React from 'react';

import { records } from '@santech/core/config/post-card.config'
import { PostcardModel } from '@santech/components/post-card/post-card.interface'
import PostCard from '@santech/components/post-card/post-card'

import style from './blog.module.css';
import Footer from '@santech/components/footer/footer';
import Paper from '@mui/material/Paper';

export default function BlogSlides() {

    return(
        <>
            <section className='m-4'>
                <section className={`grid grid-cols-3 gap-4 ${style.headSection}`}>
                    <div className='col-span-1'>
                        <Paper elevation={3} sx={{height: 450}}/>
                    </div>
                    <div className='col-span-2'>

                    </div>
                </section >
                <section className={`grid grid-cols-3 gap-4 ${style.containerSection}`}>
                    {records.map((item: PostcardModel, index: number) => {
                        return <PostCard data={item} key={index} />
                    })}
                </section >
            </section>
            {/* <section>
                <Footer />
            </section> */}
        </>
    )
}