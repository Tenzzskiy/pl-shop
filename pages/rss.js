import data from './../sources/data/cart_arenda-plasm77.ru.json'



const newsArr = data.news;
const DOMAIN = 'arenda-plazm77.ru';
const blogPostsRssXml = data => {
	let rssItemsXml = '';

	data.forEach(post => {
		rssItemsXml += `
      <item turbo="true">
        <title>${post.title}</title>
		<link>${DOMAIN}.ru/news/${post.index}</link>
        <pubDate>${post.date}</pubDate>
		<author>Arenda-Plazm</author>
        <yandex:related/>
        <turbo:content>
            <![CDATA[
                <header> 
                    <h1>${post.heading}</h1> 
                    <img src="${post.img}"/>
                </header> 
                ${post.content} 
            ]]>
        </turbo:content>
    </item>`;
	});

	return rssItemsXml;
};

const getRssXml = blogPosts => {
	const rssItemsXml = blogPostsRssXml(blogPosts);

	return `<?xml  version="1.0" encoding="UTF-8" ?>
  <rss xmlns:yandex="http://news.yandex.ru" xmlns:media="http://search.yahoo.com/mrss/" xmlns:turbo="http://turbo.yandex.ru" version="2.0">
    <channel>
        <title>Заказать фуршет в офис с доставкой блюд на мероприятие в Москве 🥪</title>
        <link>${DOMAIN}.ru</link>
        <description>
            Доставка и организация фуршетов с готовыми блюдами в офис, услуги выездной кейтеринга для мероприятий компании. Закуски и наборы по доступной цене.
        </description>
        <language>ru</language>
        ${rssItemsXml}
    </channel>
  </rss>`;
};

function Rss() {
	return null;
}

export const getServerSideProps = async ({ res }) => {
	const news = newsArr

	res.setHeader('Content-Type', 'text/xml');
	res.write(getRssXml(news));
	res.end();

	return {
		props: {}
	};
};

export default Rss;
