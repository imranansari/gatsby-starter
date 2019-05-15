module.exports = {
  siteMetadata: {
    name: 'James Bedford',
    jobtitle: 'Front End Developer',
    email: 'hello@jamesbedford.com'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'  
  ]
}
