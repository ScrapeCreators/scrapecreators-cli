export const tiktokShopApis = {
  id: "tiktok-shop",
  name: "TikTok Shop",
  description: "Everything about TikTok Shop",
  endpoints: [
    {
      name: "Shop Search",
      method: "GET",
      description: "Scrape TikTok Shop Products from a search!",
      fullDescription: "Searches TikTok Shop for products matching a keyword query. Returns an array of product objects each with `title`, `cover` image, `url` (product page link), `price`, `sold_count`, `review_count`, `rating`, and `shop_name`. Paginate with `page`; filter by region.",
      path: "/v1/tiktok/shop/search",
      params: [
        {
          name: "query",
          type: "string",
          required: true,
          description: "Term you want to search for",
          placeholder: "shoes",
        },
        {
          name: "page",
          type: "number",
          required: false,
          description: "Page number to retrieve",
          placeholder: "1",
        },
        {
          name: "region",
          type: "select",
          options: [
            "US",
            "GB",
            "DE",
            "FR",
            "IT",
            "ID",
            "MY",
            "MX",
            "PH",
            "SG",
            "ES",
            "TH",
            "VN",
            "BR",
            "JP",
            "IE",
          ],
          placeholder: "US",
          description:
            "Region to search shop products in.",
        },
      ],
      sampleResponse: {
        success: true,
        query: "shoes",
        total_products: 100,
        products: [
          {
            product_id: "1730213444857467838",
            title: "Crocs Adult Classic Clogs",
            image: {
              height: 1200,
              width: 1200,
              uri: "tos-useast5-i-omjb5zjo8w-tx/b16ea2605a0d4708af7cbc3a1dd03624",
              url_list: [
                "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/b16ea2605a0d4708af7cbc3a1dd03624~tplv-fhlh96nyum-crop-webp:1200:1200.webp?dr=12190&from=2378011839&idc=useast5&ps=933b5bde&shcp=a6e80448&shp=8dbd94bf&t=555f072d",
                "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/b16ea2605a0d4708af7cbc3a1dd03624~tplv-fhlh96nyum-crop-webp:1200:1200.webp?dr=12190&from=2378011839&idc=useast5&ps=933b5bde&shcp=a6e80448&shp=8dbd94bf&t=555f072d",
              ],
            },
            product_price_info: {
              sku_id: "1730213454432146366",
              symbol_position: 1,
              show_currency_space: false,
              currency_show_mode: 1,
              currency_name: "USD",
              currency_symbol: "$",
              sale_price_decimal: "49.99",
              sale_price_format: "49.99",
              single_product_price_format: "49.99",
              single_product_price_decimal: "49.99",
              sale_price_integer_part_format: "49",
              sale_price_decimal_part_format: "99",
              decimal_point_symbol: ".",
              promotion_deduction_details: {},
            },
            rate_info: {
              score: 4.8,
              review_count: "2493",
            },
            sold_info: {
              sold_count: 24737,
            },
            seller_info: {
              seller_id: "7495832567110863806",
              shop_name: "Crocs",
              shop_logo: {
                height: 300,
                width: 300,
                uri: "tos-useast5-i-omjb5zjo8w-tx/0e1e83bcdab948b9aa9e6474e87a8a80",
                url_list: [
                  "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/0e1e83bcdab948b9aa9e6474e87a8a80~tplv-fhlh96nyum-resize-png:300:300.png?dr=12184&from=2422056039&idc=useast5&ps=933b5bde&shcp=d9d491bf&shp=905da467&t=555f072d",
                  "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/0e1e83bcdab948b9aa9e6474e87a8a80~tplv-fhlh96nyum-resize-png:300:300.png?dr=12184&from=2422056039&idc=useast5&ps=933b5bde&shcp=d9d491bf&shp=905da467&t=555f072d",
                ],
              },
            },
            seo_url: {
              updated_at: "1754122673333",
              canonical_url:
                "https://www.tiktok.com/shop/pdp/classic-clogs-by-crocs-lightweight-slip-on-shoes-with-ventilation/1730213444857467838",
              slug: "classic-clogs-by-crocs-lightweight-slip-on-shoes-with-ventilation",
              type: 2,
              version: 2,
            },
          },
          {
            product_id: "1729416431099876154",
            title:
              "Men's Running Shoes Blade Tennis Walking Fashion Sneakers Breathable NonSlip Gym Sports Work Trainers, Perfectfor Students and Outdoor Sport Runner Closed Sports Shoes Walking Shoes Casual Training Footwear Athletic Outdoorfun",
            image: {
              height: 800,
              width: 800,
              uri: "tos-useast5-i-omjb5zjo8w-tx/6849eb2b077845f08fb846a49385bba7",
              url_list: [
                "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/6849eb2b077845f08fb846a49385bba7~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&from=2378011839&idc=useast5&ps=933b5bde&shcp=a6e80448&shp=8dbd94bf&t=555f072d",
                "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/6849eb2b077845f08fb846a49385bba7~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&from=2378011839&idc=useast5&ps=933b5bde&shcp=a6e80448&shp=8dbd94bf&t=555f072d",
              ],
            },
            product_price_info: {
              sku_id: "1729416431099941690",
              symbol_position: 1,
              show_currency_space: false,
              currency_show_mode: 1,
              currency_name: "USD",
              currency_symbol: "$",
              sale_price_decimal: "19.99",
              origin_price_decimal: "39.99",
              sale_price_format: "19.99",
              origin_price_format: "39.99",
              discount_format: "50%",
              discount_decimal: "0.5",
              reduce_price_format: "Saving $20.00",
              single_product_price_format: "19.99",
              single_product_price_decimal: "19.99",
              sale_price_integer_part_format: "19",
              sale_price_decimal_part_format: "99",
              decimal_point_symbol: ".",
              promotion_deduction_details: {
                seller_subtotal_deduction: "20.00",
                seller_subtotal_deduction_decimal: "20",
              },
            },
            rate_info: {
              score: 4.2,
              review_count: "5705",
            },
            sold_info: {
              sold_count: 61277,
            },
            seller_info: {
              seller_id: "7495432602243337018",
              shop_name: "Mevlzz",
              shop_logo: {
                height: 300,
                width: 300,
                uri: "tos-useast5-i-omjb5zjo8w-tx/90310f23f7ae40a4aa3c10b058612edd",
                url_list: [
                  "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/90310f23f7ae40a4aa3c10b058612edd~tplv-fhlh96nyum-resize-png:300:300.png?dr=12184&from=2422056039&idc=useast5&ps=933b5bde&shcp=d9d491bf&shp=905da467&t=555f072d",
                  "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/90310f23f7ae40a4aa3c10b058612edd~tplv-fhlh96nyum-resize-png:300:300.png?dr=12184&from=2422056039&idc=useast5&ps=933b5bde&shcp=d9d491bf&shp=905da467&t=555f072d",
                ],
              },
            },
            seo_url: {
              updated_at: "1746398123415",
              canonical_url:
                "https://www.tiktok.com/shop/pdp/mens-running-shoes-mevlzz-breathable-lightweight-lace-up-trainers/1729416431099876154",
              slug: "mens-running-shoes-mevlzz-breathable-lightweight-lace-up-trainers",
              type: 2,
              version: 2,
            },
          },
        ],
      },
    },
    {
      name: "Shop Products",
      method: "GET",
      description:
        "Get the products from a TikTok Shop. This endpoint costs 1 credit per request. Use the cursor from the response to paginate through results.",
      fullDescription: "Lists all products from a specific TikTok Shop store by its URL. Returns an array of product objects each with `title`, `cover` images, `url`, `price` info, `sold_count`, `review_count`, and `rating`. Paginate with `cursor` from the previous response; filter by region.",
      path: "/v1/tiktok/shop/products",
      params: [
        {
          name: "url",
          required: true,
          type: "string",
          description: "The TikTok Shop store URL.",
          placeholder:
            "https://www.tiktok.com/shop/store/goli-nutrition/7495794203056835079",
        },
        {
          name: "cursor",
          type: "string",
          required: false,
          description:
            "Cursor parameter from the previous response to retrieve the next page of products. Omit for the first page.",
          placeholder: "",
        },
        {
          name: "region",
          type: "select",
          options: [
            "US",
            "GB",
            "DE",
            "FR",
            "IT",
            "ID",
            "MY",
            "MX",
            "PH",
            "SG",
            "ES",
            "TH",
            "VN",
            "BR",
            "JP",
            "IE",
          ],
          placeholder: "US",
          description:
            "Region to get shop products from. Defaults to US if not provided.",
        },
      ],
      sampleResponse: {
        success: true,
        shopInfo: {
          seller_id: "7495794203056835079",
          sold_count: 3767605,
          on_sell_product_count: 36,
          review_count: 284185,
          global_seller_id: "7495794203056835079",
          global_sold_count: "3767605",
          followers_count: "237879",
          video_count: "2413",
          enable_follow: true,
          shop_name: "Goli Nutrition",
          shop_logo: {
            height: 300,
            width: 300,
            uri: "tos-useast5-i-omjb5zjo8w-tx/e7478d3e93d4487a9e772fa74e10f506",
            url_list: [
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/e7478d3e93d4487a9e772fa74e10f506~tplv-fhlh96nyum-resize-webp:300:300.webp?dr=12185&from=2422056039&idc=useast8&ps=933b5bde&shcp=a6e80448&shp=905da467&t=555f072d",
              "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/e7478d3e93d4487a9e772fa74e10f506~tplv-fhlh96nyum-resize-webp:300:300.webp?dr=12185&from=2422056039&idc=useast8&ps=933b5bde&shcp=a6e80448&shp=905da467&t=555f072d",
            ],
          },
          shop_rating: "4.6",
          shop_link:
            "https://www.tiktok.com/shop/store/goli-nutrition/7495794203056835079",
          format_sold_count: "3.7M",
          region: "US",
          display_on_sell_product_count: "36",
          format_global_sold_count: "3.7M",
          shop_slogan: "Health Simple✨\nVegan. Gluten-Free. Non-GMO.",
          format_followers_count: "237.8K+",
          format_video_count: "2413",
          store_sub_score: [
            {
              score: 0.9967,
              type: 1,
              score_percentage: "100",
              high_light_tag: 1,
              platform_rate_type: 1,
            },
            {
              score: 0.5020439123674718,
              type: 2,
              score_percentage: "50",
              high_light_tag: 0,
              platform_rate_type: 0,
            },
            {
              score: 0.888,
              type: 3,
              score_percentage: "89",
              platform_rate_type: 0,
            },
          ],
          worst_rating: "0",
          best_rating: "5",
          creator_name: "Goli® Nutrition",
          desc: "Shop Goli Nutrition on TikTok Shop! 3.7M sold, 237.8K+ followers. 89+% positive feedback. 50+% Ships in 48h, 100% replies in 24h. Join the trend!",
        },
        products: [
          {
            product_id: "1729527313880355335",
            title:
              "Goli Ashwagandha & Vitamin D Gummy - Mixed Berry, KSM-66, Vegan, Plant Based, Non-GMO, Gluten-Free & Gelatin Free. America's #1 Ashwagandha Brand",
            image: {
              height: 1500,
              width: 1500,
              uri: "tos-useast5-i-omjb5zjo8w-tx/30fc1338a2bf474a9d252a790e4c119f",
              url_list: [
                "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/30fc1338a2bf474a9d252a790e4c119f~tplv-fhlh96nyum-crop-webp:1500:1500.webp?dr=12190&from=2378011839&idc=useast8&ps=933b5bde&shcp=905da467&shp=8dbd94bf&t=555f072d",
                "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/30fc1338a2bf474a9d252a790e4c119f~tplv-fhlh96nyum-crop-webp:1500:1500.webp?dr=12190&from=2378011839&idc=useast8&ps=933b5bde&shcp=905da467&shp=8dbd94bf&t=555f072d",
              ],
            },
            product_price_info: {
              sku_id: "1729527298861535751",
              symbol_position: 1,
              show_currency_space: false,
              currency_show_mode: 1,
              currency_name: "USD",
              currency_symbol: "$",
              sale_price_decimal: "14.96",
              origin_price_decimal: "24.99",
              sale_price_format: "14.96",
              origin_price_format: "24.99",
              discount_format: "40%",
              discount_decimal: "0.4",
              reduce_price_format: "Saving $10.03",
              single_product_price_format: "14.96",
              single_product_price_decimal: "14.96",
              sale_price_integer_part_format: "14",
              sale_price_decimal_part_format: "96",
              decimal_point_symbol: ".",
              promotion_deduction_details: {
                seller_subtotal_deduction: "10.03",
                seller_subtotal_deduction_decimal: "10.03",
              },
            },
            rate_info: {
              score: 4.5,
              review_count: "91316",
            },
            sold_info: {
              sold_count: 1235089,
            },
            seller_info: {
              seller_id: "7495794203056835079",
              shop_name: "Goli Nutrition",
              shop_logo: {
                height: 300,
                width: 300,
                uri: "tos-useast5-i-omjb5zjo8w-tx/e7478d3e93d4487a9e772fa74e10f506",
                url_list: [
                  "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/e7478d3e93d4487a9e772fa74e10f506~tplv-fhlh96nyum-resize-png:300:300.png?dr=12184&from=2422056039&idc=useast8&ps=933b5bde&shcp=d9d491bf&shp=905da467&t=555f072d",
                  "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/e7478d3e93d4487a9e772fa74e10f506~tplv-fhlh96nyum-resize-png:300:300.png?dr=12184&from=2422056039&idc=useast8&ps=933b5bde&shcp=d9d491bf&shp=905da467&t=555f072d",
                ],
              },
            },
            seo_url: {
              updated_at: "1754035613102",
              canonical_url:
                "https://www.tiktok.com/shop/pdp/ashwagandha-gummies-by-goli-ksm-66-mixed-berry-vegan-non-gmo/1729527313880355335",
              slug: "ashwagandha-gummies-by-goli-ksm-66-mixed-berry-vegan-non-gmo",
              type: 2,
              version: 2,
            },
          },
        ],
        has_more: true,
        cursor: "WzExMzg1LCIxNzMxMDMxNzc2NDk3MDc4NzkxIl0=",
      },
    },
    {
      name: "Product Details",
      method: "GET",
      description:
        "Get the details of a TikTok Shop Product! Get the exact amount of stock the product has, related tiktok videos promoting the product, and more!",
      fullDescription: "Fetches full details for a specific TikTok Shop product by its URL, including stock levels and affiliate videos. Returns `product_info` with `product_base` (title, images, sold_count, price), `skus` (variants with exact `stock` counts), and `product_detail_review` (product_rating, review_count, sample reviews); also returns `shop_info` (shop_name, shop_rating, followers_count) and `related_videos` (affiliate TikToks promoting the product). Related videos are only available in the US region.",
      path: "/v1/tiktok/product",
      params: [
        {
          name: "url",
          required: true,
          type: "string",
          description: "The URL of the product to get details for.",
          placeholder:
            "https://www.tiktok.com/shop/pdp/goli-ashwagandha-gummies-with-vitamin-d-ksm-66-vegan-non-gmo/1729587769570529799",
        },
        {
          name: "region",
          required: false,
          type: "string",
          description:
            "Region the proxy will be set to so you can access products from that country. Use 2 letter country codes like US, GB, FR, etc. For England, don't use UK, use GB.",
          placeholder: "US",
        },
      ],
      sampleResponse: {
        success: true,
        categories: [
          {
            category_id: "601450",
            level: 1,
            is_leaf: false,
            parent_id: "0",
            category_name: "Beauty & Personal Care",
            name_key: "magellan_601450",
          },
        ],
        sale_region: "US",
        error_code: 0,
        error_message: "",
        product_info: {
          product_id: "1730383241618035288",
          status: 1,
          seller: {
            seller_id: "7496021452055022168",
            name: "Manspot",
            avatar: {
              height: 300,
              width: 300,
              uri: "tos-useast5-i-omjb5zjo8w-tx/c34696c75ae64397911e2e06193a12cc",
              url_list: [
                "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/c34696c75ae64397911e2e06193a12cc~tplv-fhlh96nyum-resize-png:300:300.png?dr=0&from=2422056039&idc=useast8&ps=933b5bde&shcp=6ce186a1&shp=905da467&t=555f072d",
                "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/c34696c75ae64397911e2e06193a12cc~tplv-fhlh96nyum-resize-png:300:300.png?dr=0&from=2422056039&idc=useast8&ps=933b5bde&shcp=6ce186a1&shp=905da467&t=555f072d",
              ],
            },
            product_count: 14,
            seller_location: "United States of America",
            tiktok_id: "7098283607022158891",
            tiktok_url: "https://www.tiktok.com/@7098283607022158891",
          },
          product_base: {
            title:
              "【dealsforyoudays】Manspot Electric Body Hair Razor for Men - USB Rechargeable, Waterproof, Replaceable Ceramic Heads, Ultra-Smooth Shaving, Cordless Trimmer for Grooming Routine",
            desc_video: {
              id: "v12d52gd0030ctp3lknog65q8llkgcng",
              duration: 45.12,
              post_url:
                "https://p16-sign.tiktokcdn-us.com/tos-useast5-p-afa798-tx/o8ZA1q3RIWBxiuEE26yRtg6vSIOIwvi4uUM0S~tplv-noop.image?t=9276707c&x-expires=1754373510&x-signature=MsmTJcnrIme3jsFlNSt2inH%2FpJQ%3D",
              media_type: "video",
              video_infos: [
                {
                  main_url:
                    "https://v16m-default.tiktokcdn-us.com/01ffc8343c2e3127afb0726eff95ad96/68919d86/video/tos/useast5/tos-useast5-v-afa798-tx/owOtyWSdi4731vMSvI96iQRMUyvIwE0IgZBC6/?a=0&bti=PDM8QDI2M2A%3D&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=832&bt=416&cs=0&ds=6&ft=GS-jnInz7Th6_-fKXq8Zmo&mime_type=video_mp4&qs=0&rc=ZTtnNTlkaDdkNTM6MzQ0M0BpamZub3Q5cm42dzMzZzVnNEAtYjRgNDY2Xi4xYl5eMWIwYSNrZGk1MmRraW1gMC1kMi9zcw%3D%3D&vvpl=1&l=202508042357441758B7D2E7DB9E01F44C&btag=e00088000",
                  backup_url:
                    "https://v16m-default.tiktokcdn-us.com/01ffc8343c2e3127afb0726eff95ad96/68919d86/video/tos/useast5/tos-useast5-v-afa798-tx/owOtyWSdi4731vMSvI96iQRMUyvIwE0IgZBC6/?a=0&bti=PDM8QDI2M2A%3D&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=832&bt=416&cs=0&ds=6&ft=GS-jnInz7Th6_-fKXq8Zmo&mime_type=video_mp4&qs=0&rc=ZTtnNTlkaDdkNTM6MzQ0M0BpamZub3Q5cm42dzMzZzVnNEAtYjRgNDY2Xi4xYl5eMWIwYSNrZGk1MmRraW1gMC1kMi9zcw%3D%3D&vvpl=1&l=202508042357441758B7D2E7DB9E01F44C&btag=e00088000",
                  url_expire: 1754373510,
                  width: 1024,
                  height: 576,
                  file_hash: "19737dc9ddb53c96371d9bb7c79fd1fd",
                  format: "mp4",
                  size: 2408193,
                  bitrate: 426984,
                  video_quality: "normal",
                },
              ],
            },
            images: [
              {
                height: 800,
                width: 800,
                thumb_uri:
                  "tos-useast5-i-omjb5zjo8w-tx/23a77319ea594151b3730747704a62bc",
                thumb_url_list: [
                  "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/23a77319ea594151b3730747704a62bc~tplv-fhlh96nyum-resize-jpeg:200:200.jpeg?dr=0&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=607f11de&idc=useast8&from=1826719393",
                  "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/23a77319ea594151b3730747704a62bc~tplv-fhlh96nyum-resize-jpeg:200:200.jpeg?dr=0&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=607f11de&idc=useast8&from=1826719393",
                ],
                uri: "tos-useast5-i-omjb5zjo8w-tx/23a77319ea594151b3730747704a62bc",
                url_list: [
                  "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/23a77319ea594151b3730747704a62bc~tplv-fhlh96nyum-resize-jpeg:800:800.jpeg?dr=0&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=607f11de&idc=useast8&from=1826719393",
                  "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/23a77319ea594151b3730747704a62bc~tplv-fhlh96nyum-resize-jpeg:800:800.jpeg?dr=0&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=607f11de&idc=useast8&from=1826719393",
                ],
              },
            ],
            sold_count: 7160,
            price: {
              original_price: "$3?",
              real_price: "$2?",
              discount: "-47%",
              need_icon: false,
              is_interval_price: false,
              show_hot_zone: false,
              min_sku_price: "2?",
              max_sku_price: "",
              currency: "USD",
              min_sku_original_price: "39.99",
              panel_schema: "",
              currency_symbol: "$",
              symbol_position: 1,
              da_info: '{"price_show_tag":"","discount_percentage":"47"}',
            },
          },
          sale_props: [
            {
              prop_id: "100000",
              prop_name: "Color",
              has_image: true,
              sale_prop_values: [
                {
                  prop_value_id: "6926865445131749121",
                  prop_value: "Black",
                  image: {
                    height: 800,
                    width: 800,
                    thumb_uri:
                      "tos-useast5-i-omjb5zjo8w-tx/93a076a4750d48bdafea2ae357725093",
                    thumb_url_list: [
                      "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/93a076a4750d48bdafea2ae357725093~tplv-fhlh96nyum-resize-jpeg:200:200.jpeg?dr=0&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=607f11de&idc=useast8&from=1826719393",
                      "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/93a076a4750d48bdafea2ae357725093~tplv-fhlh96nyum-resize-jpeg:200:200.jpeg?dr=0&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=607f11de&idc=useast8&from=1826719393",
                    ],
                    uri: "tos-useast5-i-omjb5zjo8w-tx/93a076a4750d48bdafea2ae357725093",
                    url_list: [
                      "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/93a076a4750d48bdafea2ae357725093~tplv-fhlh96nyum-resize-jpeg:800:800.jpeg?dr=0&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=607f11de&idc=useast8&from=1826719393",
                      "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/93a076a4750d48bdafea2ae357725093~tplv-fhlh96nyum-resize-jpeg:800:800.jpeg?dr=0&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=607f11de&idc=useast8&from=1826719393",
                    ],
                  },
                },
              ],
            },
          ],
          skus: [
            {
              sku_id: "1730384306561520216",
              sku_sale_props: [
                {
                  prop_id: "100000",
                  prop_name: "Color",
                  prop_value_id: "6926865445131749121",
                  prop_value: "Black",
                },
              ],
              sale_prop_value_ids: "6926865445131749121",
              stock: 1824,
              purchase_limit: 20,
              price: {
                real_price: {
                  price_str: "$2?",
                  price_val: "2?",
                  currency: "USD",
                  original_price: "",
                },
                original_price: "$3?",
                discount: "-47%",
                original_price_value: "3?",
              },
              need_icon: false,
              add_to_cart_button: {
                status: 2,
              },
              warehouse_id: "7348468937296889643",
              quantity_property: {
                default_add_cart_quantity: 1,
                quantity_minus_support_edit: true,
              },
              buy_button: {
                desc: "Buy now",
                default_desc: "Buy now",
              },
              minimum_buy_quantity: 0,
              promotion_limit_quantity: 0,
              deduction_text: "",
              status: 1,
              pdp_button_area_id: "add_disable",
              da_info:
                '{"delivery_flag_sku":"{\\"free_shipping_product_cnt\\":\\"-1\\"}"}',
            },
          ],
          product_detail_review: {
            product_rating: 4.3,
            review_count: 595,
            review_items: [
              {
                review: {
                  review_id: "7516224145770006315",
                  rating: 5,
                  display_text:
                    "Great product. Good shipping. Exactly as described. Does not nick. Holds charge for a long time. Light weight. Waterproof even used in the shower.",
                  review_timestamp: "1750007337100",
                  has_origin_text: true,
                  display_review_text: [
                    {
                      text_type: 1,
                      plain_text:
                        "Great product. Good shipping. Exactly as described. Does not nick. Holds charge for a long time. Light weight. Waterproof even used in the shower.",
                    },
                  ],
                  review_timestamp_fmt: "June 15, 2025",
                  main_review_title: "",
                },
                sku_id: "1730384306561651288",
                sku_specification: "Item: Blue",
                review_user: {
                  name: "thedustinppeterson",
                  avatar: {
                    url_list: [
                      "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/98315574440f18f07c635207bb216368~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=45b1ac87&x-expires=1754521200&x-signature=Ur3y7f80YCwLVfIEmYaxTbAxuyE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=5f8d3399&idc=useast8",
                      "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/98315574440f18f07c635207bb216368~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=da4267ad&x-expires=1754521200&x-signature=aeSEa6RnH9mbbwCFD1JDa3bJsVQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=5f8d3399&idc=useast8",
                      "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/98315574440f18f07c635207bb216368~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=0ec2c591&x-expires=1754521200&x-signature=YVsiflbyT%2Fy%2Bey01NXA%2FsF4Va3s%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=5f8d3399&idc=useast8",
                    ],
                  },
                  link: "aweme://user/profile/7019811528040367109?sec_uid=MS4wLjABAAAA6l4bHgDxc3aZPlMYQvuq4K5rnUIIYWPfUjdsFlzKyCVBfKH-gczfRah5vKXjPbrj&from_scene=8",
                },
                is_owner: false,
                is_anonymous: false,
                review_source_type: 0,
                review_source_name: "Purchased on TikTok",
                link: "",
                is_updated: false,
                third_party_popup_title: "",
                third_party_popup_content: "",
                third_party_popup_button_text: "",
              },
            ],
            review_count_str: "595",
            review_count_str_v2: "595",
          },
          seller_id: "7496021452055022168",
        },
        shop_info: {
          seller_id: "7496021452055022168",
          sold_count: 50887,
          on_sell_product_count: 14,
          review_count: 4215,
          global_seller_id: "7496021452055022168",
          global_sold_count: "50887",
          followers_count: "1796",
          video_count: "100",
          enable_follow: true,
          shop_name: "Manspot",
          shop_logo: {
            height: 300,
            width: 300,
            uri: "tos-useast5-i-omjb5zjo8w-tx/c34696c75ae64397911e2e06193a12cc",
            url_list: [
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/c34696c75ae64397911e2e06193a12cc~tplv-fhlh96nyum-resize-webp:300:300.webp?dr=0&from=2422056039&idc=useast8&ps=933b5bde&shcp=607f11de&shp=905da467&t=555f072d",
              "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/c34696c75ae64397911e2e06193a12cc~tplv-fhlh96nyum-resize-webp:300:300.webp?dr=0&from=2422056039&idc=useast8&ps=933b5bde&shcp=607f11de&shp=905da467&t=555f072d",
            ],
          },
          shop_rating: "4.4",
          shop_link:
            "https://www.tiktok.com/shop/store/manspot/7496021452055022168",
          background: {
            is_default: true,
            image: {
              height: 300,
              width: 300,
              uri: "tos-useast5-i-omjb5zjo8w-tx/c34696c75ae64397911e2e06193a12cc",
              url_list: [
                "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/c34696c75ae64397911e2e06193a12cc~tplv-fhlh96nyum-resize-webp:300:300.webp?dr=0&from=2422056039&idc=useast8&ps=933b5bde&shcp=607f11de&shp=905da467&t=555f072d",
                "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/c34696c75ae64397911e2e06193a12cc~tplv-fhlh96nyum-resize-webp:300:300.webp?dr=0&from=2422056039&idc=useast8&ps=933b5bde&shcp=607f11de&shp=905da467&t=555f072d",
              ],
            },
            shop_background_type: 3,
          },
          format_sold_count: "50.8K+",
          region: "US",
          display_on_sell_product_count: "14",
          format_global_sold_count: "50.8K+",
          format_followers_count: "1.7K+",
          format_video_count: "100",
          store_sub_score: [
            {
              score: 0.9787,
              type: 1,
              score_percentage: "98",
              high_light_tag: 1,
              platform_rate_type: 0,
            },
            {
              score: 0.9745428973277075,
              type: 2,
              score_percentage: "97",
              high_light_tag: 1,
              platform_rate_type: 1,
            },
            {
              score: 0.8378,
              type: 3,
              score_percentage: "84",
              platform_rate_type: 0,
            },
          ],
          worst_rating: "0",
          best_rating: "5",
          creator_name: "Manspot",
          shop_identity_label: {
            label_type: 2,
            identity_label_text: "OFFICIAL SHOP",
            identity_logo_light: {
              height: 144,
              width: 144,
              ratio: 0,
              minetype: "image/png",
              uri: "tos-useast5-i-omjb5zjo8w-tx/e6ee5e25d8a049b39c897d02fe9d3fd4",
              url_list: [
                "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/e6ee5e25d8a049b39c897d02fe9d3fd4~tplv-fhlh96nyum-origin-png.png?dr=0&from=2422056039&idc=useast8&ps=933b5bde&shcp=607f11de&shp=905da467&t=555f072d",
                "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/e6ee5e25d8a049b39c897d02fe9d3fd4~tplv-fhlh96nyum-origin-png.png?dr=0&from=2422056039&idc=useast8&ps=933b5bde&shcp=607f11de&shp=905da467&t=555f072d",
              ],
            },
          },
          desc: "Shop Manspot on TikTok Shop! 50.8K+ sold, 1.7K+ followers. 84+% positive feedback. 97+% Ships in 48h, 98+% replies in 24h. Join the trend!",
        },
        shop_performance: [
          {
            score_percentile: 98,
            type: 1,
          },
          {
            score_percentile: 97,
            type: 2,
          },
          {
            score_percentile: 84,
            type: 3,
          },
          {
            score_percentile: 94,
            type: 10,
          },
        ],
        related_videos: [
          {
            item_id: "7527142083258305822",
            height: 1920,
            width: 1080,
            duration: 57900,
            author_id: "6680168318781539334",
            play_count: 324944,
            like_count: 1812,
            upload_time: "1752549352",
            expiration_time: "1754373525",
            title:
              "#clippers #manspot #balltrimmerformen #cleanshave #intimatetrimmer ",
            cover_image_url:
              "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-p-0068-tx2/o8EuB9REQEAfeQLrDo7AjEqsVBFWXjdDckKa4u~tplv-tiktokx-360p.jpeg?dr=9616&refresh_token=1766d771&x-expires=1754434800&x-signature=lRWsCgvnwEp6UQqLhsH0PgRn88M%3D&t=4d5b0474&ps=13740610&shp=d05b14bd&shcp=34ff8df6&idc=useast8&s=TTEC_PDP_WEB&ftpl=1",
            content_url:
              "https://v16m-default.tiktokcdn-us.com/dd4ea5ea67c5f3bff2da44a43344e9d0/68919d95/video/tos/useast8/tos-useast8-ve-0068c001-tx2/o8IDodguOBacEBEqW4WEKsUAEjVfrXQQjAfFRj/?a=0&bti=MzV2KXVmcnZmd0BqOjo2QDI6bWJsK2IrYnFgIzE0M2A%3D&ch=0&cr=0&dr=0&er=0&lr=all&net=0&cd=0%7C0%7C0%7C0&cv=1&br=2308&bt=1154&cs=0&ds=6&ft=LlnQ7z4HhWH6Bbg7.FLo0PD1&mime_type=video_mp4&qs=0&rc=ZzM0PDtnaWQ8NTVpZmk2O0BpM2U2bnE5cjl2NDMzaTczNEA2YmMtLi00XmIxYzE1YGNfYSNlYGBeMmRrX25hLS1kMTJzcw%3D%3D&vvpl=1&l=202508042357476500B0C762E3A801E8F3&btag=e00088000",
            author_name: "❤️ Brittney ❤️",
            author_avatar_url:
              "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/9fbaf570003150d9888e44ed5b03b03c~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=1d0acc0f&x-expires=1754434800&x-signature=BqNkRAZzwhzBPbXPm%2FzMqw5FKzQ%3D&t=4d5b0474&ps=13740610&shp=d05b14bd&shcp=34ff8df6&idc=useast8",
            bc_ad_label_text: "Commission paid",
            url: "https://www.tiktok.com/@6680168318781539334/video/7527142083258305822",
            author_url: "https://www.tiktok.com/@6680168318781539334",
          },
        ],
      },
    },
    {
      name: "Product Reviews",
      method: "GET",
      description: "Get a product's reviews",
      fullDescription: "Fetches customer reviews for a TikTok Shop product by URL or product_id. Returns `product_reviews`, an array of review objects each with `rating`, `display_text`, `review_timestamp_fmt`, `review_user` (name, avatar), and `sku_specification` (variant purchased); also returns `total_reviews` count and `rating_distribution`. Paginate with `page`.",
      path: "/v1/tiktok/shop/product/reviews",
      params: [
        {
          name: "url",
          description: "The URL of the product (required if product_id is not provided)",
          type: "string",
          required: false,
          placeholder: "https://www.tiktok.com/shop/pdp/cat-nail-clipper-by-potaroma-adjustable-sizes-built-in-file-safe-for-kittens-cats/1731578642912612516",
        },
        {
          name: "product_id",
          description: "The ID of the product (required if url is not provided)",
          type: "string",
          required: false,
          placeholder: "1731578642912612516",
        },
        {
          name: "region",
          description: "The region of the product. This is *very* important.",
          type: "string",
          required: false,
          placeholder: "US",
        },
        {
          name: "page",
          description: "The page number of the reviews",
          type: "number",
          required: false,
          placeholder: "1",
        },
      ],
      sampleResponse: {
        "success": true,
        "credits_remaining": 33701168,
        "has_more": true,
        "total_reviews": "5967",
        "product_reviews": [
          {
            "review_id": "7449648277383333678",
            "product_id": "1729412793274503379",
            "sku_id": "1729480195115684051",
            "reviewer_id": "7118466497416561707",
            "review_rating": 4,
            "review_time": "1734506431877",
            "is_verified_purchase": true,
            "is_incentivized_review": false,
            "product_name": "OLOV Beard/Hair Shaver for Men - All-in-One Mens Grooming Kit with Trimmer for Beard, Nose, face, Cordless Hair Clippers Electric Razor, Black Comfort",
            "reviewer_name": "W**n",
            "reviewer_avatar_url": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/8a5ef54ee47fd27614d4d576879cd630~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=6e5d3b6e&x-expires=1771009200&x-signature=1HE0d6u3ZL2NY%2FWG88r8zUltKS4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=5f8d3399&idc=useast5",
            "review_text": "Product arrived intact no issues. Love all the attachments. Cuts very very well. Charges quick and efficiently. The only reason I gave a 4 was listening to the reels it’s supposed to be nip free. That was a lie, I nipped my balls and that’s not fun. I took pics other than that great product.",
            "display_image_url": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/c9460bee85df472a8455f33df693cb8d~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
            "review_images": [
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/c9460bee85df472a8455f33df693cb8d~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/86ca79beec2744f2b24944320dc54183~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/c23968b8ce354373811d9f583798d7dc~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/114d32cfff304a16b77c42de6b38bbc8~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/f75adcbf5f3a48df966d5c4b709b1b1f~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
            ],
            "sku_specification": "Black",
            "review_country": "US"
          },
          {
            "review_id": "7449933365429487403",
            "product_id": "1729412793274503379",
            "sku_id": "1729480195115684051",
            "reviewer_id": "7069790017161298986",
            "review_rating": 5,
            "review_time": "1734572786348",
            "is_verified_purchase": true,
            "is_incentivized_review": false,
            "product_name": "OLOV Beard/Hair Shaver for Men - All-in-One Mens Grooming Kit with Trimmer for Beard, Nose, face, Cordless Hair Clippers Electric Razor, Black Comfort",
            "reviewer_name": "N**n",
            "reviewer_avatar_url": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/455d12c1591e41a482bfd31866fc3df5~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=1859a901&x-expires=1771009200&x-signature=R7rbh3FBfRaj14VxWhPdQ2J1v10%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=5f8d3399&idc=useast5",
            "review_text": "Amazing product very high quality and looks very good One problem is my first time using it below the belt I nicked my self most likely bc I never used it B4 n wasn't careful other than that amazing product would recommend received all items shown all work good imo worth the buy (No I'm not sum ai)",
            "display_image_url": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/b528a2f1272f4b24af497ae44a44f441~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
            "review_images": [
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/b528a2f1272f4b24af497ae44a44f441~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/83443ff950ed42eaab0c3ede4736445b~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/71d4abb17dcb4c5aa59092db383a87d8~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
            ],
            "sku_specification": "Black",
            "review_country": "US"
          },
          {
            "review_id": "7535169519766095629",
            "product_id": "1729412793274503379",
            "sku_id": "1729553962947023059",
            "review_rating": 5,
            "review_time": "1754418389294",
            "is_verified_purchase": true,
            "is_incentivized_review": false,
            "product_name": "OLOV Beard/Hair Shaver for Men - All-in-One Mens Grooming Kit with Trimmer for Beard, Nose, face, Cordless Hair Clippers Electric Razor, Black Comfort",
            "reviewer_name": "b**n",
            "review_text": "its a good home kit for men, it got all necessary needs and for a good price, ( recommended🧼 )",
            "display_image_url": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/2ee9ed056bf94dbc8951eb6db0d6a2a6~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
            "review_images": [
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/2ee9ed056bf94dbc8951eb6db0d6a2a6~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
              "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/7c419f87e4804f5c8721db3c9833e264~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/2809968e7cb247ffb5f01ad3e4de5c9f~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/51632cbc1433444788fb85beaa6fc019~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
            ],
            "sku_specification": "Gold",
            "review_country": "US"
          },
          {
            "review_id": "7514713260093114154",
            "product_id": "1729412793274503379",
            "sku_id": "1729480195115684051",
            "review_rating": 1,
            "review_time": "1749655549764",
            "is_verified_purchase": true,
            "is_incentivized_review": false,
            "product_name": "OLOV Beard/Hair Shaver for Men - All-in-One Mens Grooming Kit with Trimmer for Beard, Nose, face, Cordless Hair Clippers Electric Razor, Black Comfort",
            "reviewer_name": "D**🃏",
            "review_text": "These are not actual size hair clippers... They are smaller trimmers... Cheap product... Clipper head was broken, out of box... there was some tiny pieces of hair on them as if they were used... the lil oil bottle had a hole in it, all the oil drained out & got on everything. Would not recommend...",
            "display_image_url": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/24fec74a43ac4280b728a9834c40d8b2~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
            "review_images": [
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/24fec74a43ac4280b728a9834c40d8b2~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
              "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/51e75c89e22e4f298f01a22a1b923c5f~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/fac8e67cb1c54af0ae09a15fa15252d2~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/4cdc642892f647c4aa53616259c76b2f~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
            ],
            "sku_specification": "Black",
            "review_country": "US"
          },
          {
            "review_id": "7488447318287697707",
            "product_id": "1729412793274503379",
            "sku_id": "1729480195115684051",
            "reviewer_id": "7402437626568377386",
            "review_rating": 5,
            "review_time": "1743540026729",
            "is_verified_purchase": true,
            "is_incentivized_review": false,
            "product_name": "OLOV Beard/Hair Shaver for Men - All-in-One Mens Grooming Kit with Trimmer for Beard, Nose, face, Cordless Hair Clippers Electric Razor, Black Comfort",
            "reviewer_name": "H**n H**y",
            "reviewer_avatar_url": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/17bfcaa335206f3cd543c65d5b1c299f~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=b404adc3&x-expires=1771009200&x-signature=J7gh%2F0ae7q52rAIPPXd22DojumA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=5f8d3399&idc=useast5",
            "review_text": "Arrived sooner than I thought! Very excited to use this, not damaged at all, perfectly boxed, everything is in the box, it is amazing",
            "display_image_url": "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/58bddee9a90b4f07b08199d211213b0a~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
            "review_images": [
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/58bddee9a90b4f07b08199d211213b0a~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
              "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/4a00f2191d26451b997a1c5b1ceae1e3~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/f4547fe0014f41c08fad7e4317e9029a~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
              "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/140196376e2e4928bb6529c8731b4ac1~tplv-fhlh96nyum-crop-webp:300:300.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
            ],
            "sku_specification": "Black",
            "review_country": "US"
          }
        ],
        "review_ratings": {
          "review_count": "5967",
          "overall_score": 4.4,
          "rating_result": {
            "1": "475",
            "2": "161",
            "3": "289",
            "4": "740",
            "5": "4302"
          }
        }
      }
    },
    {
      name: "User Showcase",
      method: "GET",
      description: "Gets public user's showcase products",
      fullDescription: "Fetches products featured in a TikTok user's public showcase — the products a creator promotes on their profile. Returns an array of product objects each with title, price, images, and shop details. Use POST request if pagination is cutting off too early. Just send the query params in the body.",
      path: "/v1/tiktok/user/showcase",
      params: [
        {
          name: "handle",
          type: "string",
          description: "The handle of the user",
          required: true,
          placeholder: "mrtiktokreviews",
        },
        {
          name: "region",
          type: "string",
          description: "Region to put the proxy in",
          required: false,
          placeholder: "US",
        },
        {
          name: "cursor",
          type: "string",
          description: "The cursor to the next page of products",
          required: false,
          placeholder: "21",
        }
      ],
      sampleResponse: {
        "success": true,
        "credits_remaining": 49999721933,
        "products": [
          {
            "product_id": "1732210666230419545",
            "title": "Be Bodywise Hair Growth Roll-On Serum | New Year New You Edition | 3% Rosemary, 3% Redensyl, 2% AnaGain | Precision Scalp Applicator | Paraben/Sulphate-Free | Non-Oily | DHT-Care Botanicals | 50ml",
            "image": {
              "height": 500,
              "width": 500,
              "uri": "tos-useast5-i-omjb5zjo8w-tx/b4088e56fc3140799ab2e52674339db4",
              "url_list": [
                "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/b4088e56fc3140799ab2e52674339db4~tplv-fhlh96nyum-crop-webp:500:500.webp?dr=12190&t=555f072d&ps=933b5bde&shp=4ee6669e&shcp=9b759fb9&idc=useast5&from=1323722398",
                "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/b4088e56fc3140799ab2e52674339db4~tplv-fhlh96nyum-crop-webp:500:500.webp?dr=12190&t=555f072d&ps=933b5bde&shp=4ee6669e&shcp=9b759fb9&idc=useast5&from=1323722398"
              ]
            },
            "product_price_info": {
              "sku_id": "1732210669134516313",
              "symbol_position": 1,
              "show_currency_space": false,
              "currency_show_mode": 1,
              "currency_name": "USD",
              "currency_symbol": "$",
              "sale_price_decimal": "46.58",
              "origin_price_decimal": "53",
              "sale_price_format": "46.58",
              "origin_price_format": "53.00",
              "discount_format": "12%",
              "discount_decimal": "0.12",
              "single_product_price_format": "46.58",
              "single_product_price_decimal": "46.58",
              "sale_price_integer_part_format": "46",
              "sale_price_decimal_part_format": "58",
              "decimal_point_symbol": ".",
              "promotion_deduction_details": {
                "seller_subtotal_deduction": "6.42",
                "seller_subtotal_deduction_decimal": "6.42"
              }
            },
            "rate_info": {
              "score": 4.5,
              "review_count": 326
            },
            "sold_info": {
              "sold_count": 5457
            },
            "seller_info": {
              "seller_id": "7495572938346760281"
            },
            "seo_url": {
              "updated_at": null,
              "canonical_url": "https://www.tiktok.com/shop/pdp/1732210666230419545",
              "slug": "be-bodywise-hair-growth-roll-on-serum-new-year-new-you-edition-3-rosemary-3-redensyl-2-anagain-precision-scalp-applicator-paraben-sulphate-free-non-oily-dht-care-botanicals-50ml",
              "type": 2,
              "version": 2
            }
          },
          {
            "product_id": "1729499864890250680",
            "title": "Nello Superbalance Hormonal Support Drink Mix, 20 Travel Packets, SRI-81 Shatavari, Myo-Inositol, Rhodiola Rosea, Vitamin C, Magnesium, Theobromine, Vitamin B6/C",
            "image": {
              "height": 500,
              "width": 500,
              "uri": "tos-useast8-i-rt0ujvrtvp-tx2/5f8ea7d0fc53439599d7dbc7052f9bcf",
              "url_list": [
                "https://p16-oec-general-useast8.ttcdn-us.com/tos-useast8-i-rt0ujvrtvp-tx2/5f8ea7d0fc53439599d7dbc7052f9bcf~tplv-fhlh96nyum-crop-webp:500:500.webp?dr=12190&t=555f072d&ps=933b5bde&shp=4ee6669e&shcp=9b759fb9&idc=useast5&from=1323722398",
                "https://p19-oec-general-useast8.ttcdn-us.com/tos-useast8-i-rt0ujvrtvp-tx2/5f8ea7d0fc53439599d7dbc7052f9bcf~tplv-fhlh96nyum-crop-webp:500:500.webp?dr=12190&t=555f072d&ps=933b5bde&shp=4ee6669e&shcp=9b759fb9&idc=useast5&from=1323722398"
              ]
            },
            "product_price_info": {
              "sku_id": "1729499867243648440",
              "symbol_position": 1,
              "show_currency_space": false,
              "currency_show_mode": 1,
              "currency_name": "USD",
              "currency_symbol": "$",
              "sale_price_decimal": "31.99",
              "origin_price_decimal": "59.99",
              "sale_price_format": "31.99",
              "origin_price_format": "59.99",
              "discount_format": "47%",
              "discount_decimal": "0.47",
              "single_product_price_format": "31.99",
              "single_product_price_decimal": "31.99",
              "sale_price_integer_part_format": "31",
              "sale_price_decimal_part_format": "99",
              "decimal_point_symbol": ".",
              "promotion_deduction_details": {
                "seller_subtotal_deduction": "28.00",
                "seller_subtotal_deduction_decimal": "28.00"
              }
            },
            "rate_info": {
              "score": 4.6,
              "review_count": 54
            },
            "sold_info": {
              "sold_count": 6808
            },
            "seller_info": {
              "seller_id": "7495315412032719288"
            },
            "seo_url": {
              "updated_at": null,
              "canonical_url": "https://www.tiktok.com/shop/pdp/1729499864890250680",
              "slug": "nello-superbalance-hormonal-support-drink-mix-20-travel-packets-sri-81-shatavari-myo-inositol-rhodiola-rosea-vitamin-c-magnesium-theobromine-vitamin-b6-c",
              "type": 2,
              "version": 2
            }
          }
        ],
        "cursor": "eyJwcm9kdWN0....."
      }
    }
  ],
};