# Discord RPC Control

## Description

This project provides tools to control Discord Rich Presence (RPC) using NestJS, React, and Prisma ORM.

## Features

- **Discord RPC Integration**: Connect and display custom statuses in Discord.
- **Database Support with Prisma**: Using Prisma ORM for efficient data handling.
- **Custom Preset Management**: Create and manage presets for quick status changes.
- **React GUI**: GUI using React.

## Installation

### Clone repo & Install dependencies

Install PostgreSQL, bun(because it's the best thing)

```bash
git clone https://github.com/webfryingpan/next-rpc.git
cd next-rpc/discord-rpc-backend # Install dependencies for backend
bun instal
cd ../discord-rpc-frontend # Install dependencies for frontend
bun install
```

### Configure .env file

Copy `.env.example` to `.env` and update the environment variables according to your settings.

Make sure to use `identical` port for `backend` and `frontend`

### Start the project

```bash
cd next-rpc/discord-rpc-backend # Run backend
bun run start
cd ../discord-rpc-frontend # Run frontend
bun run dev
```

Open <http://localhost:5173> in your browser.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or create an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
