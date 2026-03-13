cateringcare-platform/
│
├── frontend/
│   │
│   ├── pages/
│   │   ├── index.html
│   │   ├── shop.html
│   │   ├── checkout.html
│   │   └── admin.html
│   │
│   ├── css/
│   │   └── styles.css
│   │
│   ├── js/
│   │   ├── api.js
│   │   ├── cart.js
│   │   ├── shop.js
│   │   ├── admin.js
│   │   └── chat.js
│   │
│   └── components/
│       ├── navbar.js
│       └── product-card.js
│
├── backend/
│   │
│   └── api-gateway/
│       │
│       ├── src/
│       │   ├── router.js
│       │   ├── middleware.js
│       │   ├── auth.js
│       │   ├── rateLimit.js
│       │   └── response.js
│       │
│       └── index.js
│
├── workers/
│   │
│   ├── menu-worker/
│   │   │
│   │   ├── src/
│   │   │   ├── menu.controller.js
│   │   │   ├── menu.service.js
│   │   │   └── menu.routes.js
│   │   │
│   │   └── index.js
│   │
│   ├── order-worker/
│   │   │
│   │   ├── src/
│   │   │   ├── order.controller.js
│   │   │   ├── order.service.js
│   │   │   ├── order.routes.js
│   │   │   └── receipt.service.js
│   │   │
│   │   └── index.js
│   │
│   ├── chat-worker/
│   │   │
│   │   ├── src/
│   │   │   ├── chat.controller.js
│   │   │   ├── faq.service.js
│   │   │   └── ai.service.js
│   │   │
│   │   └── index.js
│   │
│   ├── admin-worker/
│   │   │
│   │   ├── src/
│   │   │   ├── admin.controller.js
│   │   │   ├── admin.auth.js
│   │   │   └── admin.service.js
│   │   │
│   │   └── index.js
│   │
│   └── menu-import-worker/
│       │
│       ├── src/
│       │   ├── menyit.client.js
│       │   ├── parser.js
│       │   └── importer.js
│       │
│       └── index.js
│
├── database/
│   │
│   ├── schema.sql
│   ├── seed.sql
│   │
│   ├── migrations/
│   │   ├── 001_initial.sql
│   │   ├── 002_orders.sql
│   │   └── 003_coupons.sql
│   │
│   └── models/
│       ├── dish.model.js
│       ├── order.model.js
│       └── customer.model.js
│
├── infrastructure/
│   │
│   ├── cloudflare/
│   │   ├── workers/
│   │   │   └── wrangler.toml
│   │   │
│   │   └── pages/
│   │       └── pages.toml
│   │
│   └── docker/
│       └── docker-compose.yml
│
├── docs/
│   ├── architecture.md
│   ├── api-spec.md
│   ├── database.md
│   ├── deployment.md
│   ├── security.md
│   └── roadmap.md
│
├── scripts/
│   ├── deploy.sh
│   ├── setup.sh
│   ├── seed-db.sh
│   └── lint.sh
│
├── tests/
│   │
│   ├── api/
│   │   ├── menu.test.js
│   │   └── order.test.js
│   │
│   └── workers/
│       └── chat.test.js
│
├── package.json
├── wrangler.toml
├── README.md
├── .env.example
└── .gitignore

