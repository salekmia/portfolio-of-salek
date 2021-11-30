import React from 'react';
import styled from 'styled-components';
import Title from '../component/Title';
import { InnerLayout, MainLayout } from '../style/Layouts';

const Blogs = () => {
    return (
        <MainLayout>
            <BlogsPageStyled>
                <Title title={'Blogs'} span={'Blogs'}></Title>
                <InnerLayout>
                    <div className="blog-content">
                        <h2>Blogs coming soon. Thank you.</h2>
                    </div>
                </InnerLayout>
            </BlogsPageStyled>
        </MainLayout>
    );
};

const BlogsPageStyled = styled.div`
    .blog-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default Blogs;