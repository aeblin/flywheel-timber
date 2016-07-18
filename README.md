Flywheel Timber [![Circle CI](https://circleci.com/gh/Shopify/Timber.svg?style=svg)](https://circleci.com/gh/Shopify/Timber)
=====================
This is a heavy customization of Timber, moving it much more to Bootstrap for use by [Flywheel Coffee](https://flywheelcoffee.com), in San Francisco, CA.

Documentation
---------------------
Timber's documentation is hosted on [GitHub Pages](http://pages.github.com/). View the raw files in the [gh-pages branch](https://github.com/Shopify/Timber/tree/gh-pages). Please report any discrepancies, bugs, or requests in [issues](https://github.com/Shopify/Timber/issues).

Running This
---------------
- `gulp watch` to keep an eye on SCSS files
- `theme watch` to stream updates to live site (This is dangerous, please make sure you're not touching anything that's going to blow the site up while it's in production)

Basic structure
---------------
```
├── assets
│   └── Javascript, CSS, and theme images
├── layout
│   ├── theme.liquid
│   └── optional alternate layouts
├── snippets
│   └── custom code snippets
├── spec
│   └── tests and helpers
├── templates
│   ├── 404.liquid
│   ├── article.liquid
│   ├── blog.liquid
│   ├── cart.liquid
│   ├── collection.liquid
│   ├── collection.list.liquid
│   ├── index.liquid
│   ├── list-collections.liquid
│   ├── page.contact.liquid
│   ├── page.liquid
│   ├── product.liquid
│   ├── search.liquid
│   └── customers
│         └── required templates if customer accounts are enabled
├── config.yml
│   └── if using the theme gem (see link under Additional Resources)
```
i18n testing
---------------------
Tests make sure there are no missing or extra i18n strings or invalid html in your locale liquid files.

All PRs must pass the tests before being merged. Check the test status when you open a new PR on GitHub, or locally with the following.

- `bundle install` to install all the dependecies
- `rspec spec` to run all the tests

Support
---------------------
Get involved with Timber or follow along with updates and news.

- Track all issues and feature requests here on GitHub.
- Follow author [@cshold on Twitter](http://twitter.com/cshold).

Additional resources
---------------------
- [Themes Documentation][1]: Learn more about Liquid and theme templates.
- [Theme Gem][2]: Run the command line for a more intimate way of managing your theme files.
- [Theme Kit][7]: Next generation tool for syncing theme files. Currently in beta.
- [Liquid Tag Cheat Sheet][4]
- [Retail Tours][5]: Sign up for a workshop in a city near you to learn all things Shopify.
- Need more help? Ask a question in our [Design Forums][6].

License
---------------------
Timber is released under the [MIT License](LICENSE).

[1]: http://docs.shopify.com/themes
[2]: https://github.com/Shopify/shopify_theme
[3]: http://apps.shopify.com/desktop-theme-editor
[4]: http://cheat.markdunkley.com
[5]: https://www.shopify.com/retailtour
[6]: http://ecommerce.shopify.com/c/ecommerce-design
[7]: https://github.com/Shopify/themekit
