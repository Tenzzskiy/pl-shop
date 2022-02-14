import { translit } from './../sources/utils/helpers'

import data from "../sources/data/cart_arenda-plasm77.ru.json";
const DOMAIN = 'arenda-plazm77.ru';
const PAGES = {
		laptops: `${DOMAIN}.ru/laptops`,
		projectors: `${DOMAIN}.ru/projectors`,
		screens: `${DOMAIN}.ru/screens`,
		main: `${DOMAIN}.ru/`,
		desinfection: `${DOMAIN}.ru/desinfection`,
		videoPanel: `${DOMAIN}.ru/videoPanel`,
		touchPanel: `${DOMAIN}.ru/touchPanel`,
		sound: `${DOMAIN}.ru/sound`,
}

const newsArr = data.news;
const Sitemap = () => {
	return null;
};

export const getServerSideProps = async ({ res }) => {
	const staticPaths = Object.values(PAGES).map((page) => page);

	const createStream = (path) => {

		return `<url>
              <loc>${path}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
          </url>`;
	};

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${createStream(`${DOMAIN}`)}
      ${staticPaths.map(createStream).join("")}
      ${newsArr.map((item) => {
		const path = (`news/${item.index}`);
		return createStream(`${DOMAIN}.ru/${path}`);
	})
			.join("")}
  </urlset>`;

	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default Sitemap;