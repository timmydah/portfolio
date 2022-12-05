import React from 'react'

import './AllArticle.scss'
import { images } from '../../constant'

const articles = [
    { imgUrl: images.Article1, title:'Learning Web3 the easiest way.'},
    { imgUrl: images.Article1, title:'Learning a skill in Web.'},
    { imgUrl: images.Article1, title:'Learning a skill in Web.'},
    { imgUrl: images.Article1, title:'Learning a skill in Web.'},
    { imgUrl: images.Article1, title:'Learning a skill in Web.'},
    { imgUrl: images.Article1, title:'Learning a skill in Web.'},
    { imgUrl: images.Article1, title:'Learning a skill in Web.'},
    { imgUrl: images.Article1, title:'Learning a skill in Web.'},
    { imgUrl: images.Article1, title:'Learning a skill in Web.'},
    { imgUrl: images.Article1, title:'Learning a skill in Web.'},
    { imgUrl: images.Article1, title:'Learning a skill in Web.'},
    { imgUrl: images.Article1, title:'Learning a skill in Web.'},
    { imgUrl: images.Article1, title:'Learning a skill in Web.'},
    { imgUrl: images.Article1, title:'Learning a skill in Web.'},
    { imgUrl: images.Article1, title:'Learning a skill in Web.'}
  ]
const AllArticle = () => {
    
    return (
        <div className='allArticle__app'>
            <div className='allArticle'>
                <div className='allArticle_col1'>
                    {articles.map((article) => (
                        <div className='allArticle_col2'>
                            <img src={article.imgUrl} alt='article' />
                            <div className='p-col'>
                                <p>{article.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='more'>
                <p>loading more articles </p>
            </div>
            
        </div>
    )
}

export default AllArticle