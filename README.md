# Horiseon Web Application

A [Next.js](https://nextjs.org) exhibition site showcasing reimagined riverbank designs for the Saigon River.

## Getting Started

### Option 1: Local Development

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Option 2: Docker (CLI)

Build the Docker image:

```bash
docker build -t horiseon-webapp .
```

Run the container:

```bash
docker run -p 3000:3000 horiseon-webapp
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

To run in detached mode:

```bash
docker run -d -p 3000:3000 --name horiseon horiseon-webapp
```

Stop the container:

```bash
docker stop horiseon
```

Remove the container:

```bash
docker rm horiseon
```

### Option 3: Docker Desktop (GUI)

1. **Build the image:**
   - Open Docker Desktop
   - Navigate to the **Images** tab
   - Click **Build** button
   - Select this project directory
   - Set image name: `horiseon-webapp`
   - Click **Build**

2. **Run the container:**
   - Go to the **Images** tab
   - Find `horiseon-webapp`
   - Click the **Run** button (▶️)
   - Expand **Optional Settings**:
     - Container name: `horiseon`
     - Ports: Host port `3000` → Container port `3000`
   - Click **Run**

3. **Access the application:**
   - Go to the **Containers** tab
   - Find the running `horiseon` container
   - Click the **Open in browser** link (port 3000:3000)
   - Or visit [http://localhost:3000](http://localhost:3000)

4. **Manage the container:**
   - Use the **Stop**, **Start**, or **Delete** buttons in the Containers tab

## Development

You can start editing the pages by modifying files in the `app/` directory. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load fonts.

## Learn More

To learn more about Next.js and Docker:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Docker Documentation](https://docs.docker.com/) - learn about containerization
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - download Docker Desktop

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

We welcome contributions! Please follow these guidelines:

### Branch Strategy

1. **Create or switch to a ui feature branch:**

   ```bash
   git checkout -b feature/your-feature-name
   or
   git checkout feature/ui
   ```

2. **Make your changes** and commit:

   ```bash
   git add .
   git commit -m "feat: describe your changes"
   ```

3. **Push your branch:**
   ```bash
   git push origin feature/your-feature-name
   ```

### Pull Request Process

1. Create a Pull Request from your feature branch to `dev`
2. Ensure all tests pass and code is properly formatted
3. Request review from team members
4. Once approved, merge the PR into `dev`
5. Delete the feature branch after merging

### Code Standards

- Follow the project's TypeScript configuration
- Ensure responsive design for all components
- Test changes in mobile viewports
- Maintain accessibility standards (WCAG 2.1)
