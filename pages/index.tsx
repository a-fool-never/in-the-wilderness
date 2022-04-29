import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="am | in the wilderness">
    <div id="content">
      <h2>I am.</h2>
      <p>ゲームをプレイして音楽を聞いてアニメを見る</p>
      <h3>外部リンク</h3>
      <ul>
        <li><a href="https://twitter.com/a_fool_never">Twitter</a></li>
        <li><a href="https://github.com/a-fool-never">GitHub</a></li>
        {/* <li><a href="https://www.youtube.com/channel/UCeuMXHHfFDLYaaBjg3XsXmA">YouTube</li>*/}
        {/* <li>Pixiv</li> */}
      </ul>
    </div>
  </Layout>
)

export default IndexPage
