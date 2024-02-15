# Project Name

## Description

This project combines NestJS with Discord RPC integration and Prisma ORM.
Additionally, a graphical user interface powered by Next.js is planned.

## Features

- **Discord RPC Integration**: Connect and display custom statuses on Discord.
- **Database Support with Prisma**: Using Prisma ORM for efficient data handling.
- **Custom Preset Management**: Create and manage presets for quick status changes.
- **Next.js GUI Integration (Planned)**: Develop a GUI using Next.js.

## Setup and Installation

### Prerequisites

- Docker

### Installation steps

1. **Clone the repository**

```bash
git clone https://github.com/webfryingpan/next-rpc.git
```

2. **Configure**

- Configure .env.example file

Rename .env.example to .env and configure.

- Configure docker-compose.yml

Configure **POSTGRES_USER**, **POSTGRES_DB**, **POSTGRES_PASSWORD**.

**.env file settings and database settings are must match!**

3. **Launch with docker**

```bash
docker-compose up
```

## Usage

After setting up the project, you can use the RESTful API to manage Discord RPC
statuses. Additionally, the planned Next.js GUI will provide a graphical
interface for an enhanced user experience.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or create
an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the LICENSE file for
details.
