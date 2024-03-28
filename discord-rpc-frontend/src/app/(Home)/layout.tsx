import Header from '@components/ui/header'

export const metadata = {
	title: 'Discord RPC',
	description: 'Discord RPC homepage.',
}

interface HomeLayoutProps {
	children: React.ReactNode
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => (
	<html lang='en'>
		<head>
			<link rel='icon' href='/favicon.png' sizes='any' />
		</head>
		<body>
			<Header />
			<main>{children}</main>
		</body>
	</html>
)

export default HomeLayout
