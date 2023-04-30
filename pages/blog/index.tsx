import * as React from 'react';

import { records } from '@santech/core/config/post-card.config'
import { PostcardModel } from '@santech/components/post-card/post-card.interface'
import PostCard from '@santech/components/post-card/post-card'

import style from './blog.module.css';
import Paper from '@mui/material/Paper';
import ResponsiveCarousel from '@santech/components/carousel/carousel';

export default function BlogSlides() {

    return(
        <>
            <section className='m-4 minimum-height'>
                    <Paper elevation={3} sx={{height: '55vh'}} className={style.headSection}>
                        <ResponsiveCarousel />
                    </Paper>
                <section className={`grid grid-cols-3 gap-4 ${style.containerSection}`}>
                    {records.map((item: PostcardModel, index: number) => {
                        return <PostCard data={item} key={index} />
                    })}
                </section >
            </section>
        </>
    )
}