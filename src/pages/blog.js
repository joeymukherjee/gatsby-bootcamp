import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
    const contentfulData = useStaticQuery (graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate
                    order: DESC
                }
            )
            {
                edges {
                    node {
                        title
                        slug
                        publishedDate (formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)
    /*
    const markdownData = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
        const MarkdownPosts = ({edges}) => (
        <>
            {
                edges.map((edge) => {
                    return (
                        <li className={blogStyles.post} key={edge.node.fields.slug}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })
            }
        </>
    )
*/
    
    const ContentfulPosts = ({edges}) => (
        edges.map((edge) => {
            return (
                <li className={blogStyles.post} key={edge.node.slug}>
                    <Link to={`/blog/${edge.node.slug}`}>
                        <h2>{edge.node.title}</h2>
                        <p>{edge.node.publishedDate}</p>
                    </Link>
                </li>
            )
        })
    )

    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                <ContentfulPosts edges={contentfulData.allContentfulBlogPost.edges}/>
            </ol>
        </Layout>
    )
}

export default BlogPage