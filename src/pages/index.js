import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Image, Box, Icon, LinkBox, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
import * as Components from "components";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Personal Profile
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="80px 0"
			sm-padding="40px 0"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				Personal profile
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Hey! I'm a Node.JS Developer
			</Text>
		</Section>
		<Section
			padding="80px 0 80px 0"
			sm-padding="60px 0 60px 0"
			align-items="center"
			background="--color-lightD2"
			lg-background="--color-lightD2"
		>
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" border-radius="100px" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="center"
				md-width="100%"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
				md-margin="0px 0px 30px 0px"
				align-items="center"
				padding="0px 0px 0px 0px"
			>
				<Image
					max-width="340px"
					src="https://uploads.quarkly.io/666fda49fdcae00021e37362/images/portfolio.jpg?v=2024-06-17T07:37:20.066Z"
					md-margin="0px 0px 20px 0px"
					border-radius="100px"
					srcSet="https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/portfolio.jpg?v=2024-06-17T07%3A37%3A20.066Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/portfolio.jpg?v=2024-06-17T07%3A37%3A20.066Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/portfolio.jpg?v=2024-06-17T07%3A37%3A20.066Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/portfolio.jpg?v=2024-06-17T07%3A37%3A20.066Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/portfolio.jpg?v=2024-06-17T07%3A37%3A20.066Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/portfolio.jpg?v=2024-06-17T07%3A37%3A20.066Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/portfolio.jpg?v=2024-06-17T07%3A37%3A20.066Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL2" font="--base">
					Juan Issac Hernandez Degollado
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text margin="0px 0px 40px 0px" color="--primary" font="--headline2" md-margin="0px 0px 30px 0px">
					Juan Issac Hernandez Degollado
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="--lead">
					Hey! I guess you are here for the amazing marketing campaign I did. And you are looking for, probably,  a back-end developer.
					<br />
					I have many years of experience using Node.JS and I think I can help you in with your problems.
				</Text>
				<Text margin="0px 0px 0px 0px" color="--darkL2" font="--lead">
					Apart of my strong background in Node.js, I've used different could platforms (Azure and AWS) with many services.
					<br />
				</Text>
			</Box>
		</Section>
		<Section background="--color-darkL2" padding="60px 0" sm-padding="40px 0" color="--primary">
			<Override slot="SectionContent" color="--primary" />
			<Box
				margin="-16px -16px -16px -16px"
				padding="0px 0px 0px 0px"
				display="flex"
				width=" "
				flex-wrap="wrap"
			>
				<Box padding="16px 16px 16px 16px" display="flex" width="50%" lg-width="100%">
					<Box
						padding="98px 64px 98px 64px"
						display="flex"
						flex-direction="column"
						background="--color-light"
						color="--dark"
					>
						<Text
							as="h4"
							margin="12px 0"
							font="--base"
							color="--grey"
							letter-spacing="1px"
							text-transform="uppercase"
						>
							WORK experience
						</Text>
						<Components.QuarklycommunityKitLoopText slides="Envia.com,Softtek,Globant,The KSquare Group" min-height="250px" max-height="fit-content">
							<Override slot="Before Text">
								I have worked for
							</Override>
							<Override slot="After Text">
								.
							</Override>
						</Components.QuarklycommunityKitLoopText>
						<Text margin="0px 0px 0px 0px" min-height="100px">
							I have worked with many teams using scrum, different technologies, for example, a CORE API where every endpoint is there or a micro-service with Node.JS and express or NEST. Using REST API or Messages.
							<br />
							<br />
							Implementing testing using Jest in the process.
						</Text>
					</Box>
				</Box>
				<Box display="flex" width="50%" flex-wrap="wrap" lg-width="100%">
					<Box
						padding="16px 16px 16px 16px"
						display="flex"
						width="100%"
						lg-width="33.3333%"
						md-width="100%"
						sm-width="100%"
					>
						<Box
							padding="0px 0px 624px 0px"
							display="flex"
							flex-direction="column"
							background="url(https://uploads.quarkly.io/666fda49fdcae00021e37362/images/ksquare.jpg?v=2024-06-17T07:55:07.271Z) center/cover"
							width="100%"
							lg-padding="0px 0px 248px 0px"
							sm-padding="0px 0px 380px 0px"
						/>
					</Box>
					<Box
						padding="16px 16px 16px 16px"
						display="flex"
						width="50%"
						lg-width="33.3333%"
						md-width="50%"
						sm-width="100%"
						position="static"
					>
						<Box
							padding="0px 0px 296px 0px"
							display="flex"
							flex-direction="column"
							background="url(https://uploads.quarkly.io/666fda49fdcae00021e37362/images/globant.jpeg?v=2024-06-17T07:53:51.003Z) center/100%"
							width="100%"
							lg-padding="0px 0px 248px 0px"
							sm-padding="0px 0px 380px 0px"
							position="static"
						/>
					</Box>
					<Box
						padding="16px 16px 16px 16px"
						display="flex"
						width="50%"
						lg-width="33.3333%"
						md-width="50%"
						sm-width="100%"
					>
						<Box
							padding="0px 0px 296px 0px"
							display="flex"
							flex-direction="column"
							background="url(https://uploads.quarkly.io/666fda49fdcae00021e37362/images/enviacom.png?v=2024-06-17T07:56:20.091Z) center/100%"
							width="100%"
							lg-padding="0px 0px 248px 0px"
							sm-padding="0px 0px 380px 0px"
						/>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" lg-background="--color-lightD2">
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Text
					margin="0px 0px 0px 0px"
					font="--headline1"
					color="--dark"
					sm-font="normal 700 52px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
					lg-color="--primary"
				>
					Technologies
				</Text>
				<Text
					margin="25px 0px 0px 0px"
					font="--lead"
					display="block"
					text-align="center"
					color="--darkL2"
					lg-width="100%"
					width="60%"
				>
					This are some technologies I've used recently.
				</Text>
			</Box>
			<Box margin="40px 0px 0px 0px" display="flex" flex-direction="row" flex-wrap="wrap">
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image
						src="https://uploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-nodejs-128.png?v=2024-06-17T08:04:36.278Z"
						border-radius="16px"
						max-width="100%"
						lg-min-width="100%"
						lg-min-height="100%"
						srcSet="https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-nodejs-128.png?v=2024-06-17T08%3A04%3A36.278Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-nodejs-128.png?v=2024-06-17T08%3A04%3A36.278Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-nodejs-128.png?v=2024-06-17T08%3A04%3A36.278Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-nodejs-128.png?v=2024-06-17T08%3A04%3A36.278Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-nodejs-128.png?v=2024-06-17T08%3A04%3A36.278Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-nodejs-128.png?v=2024-06-17T08%3A04%3A36.278Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-nodejs-128.png?v=2024-06-17T08%3A04%3A36.278Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-typescript.svg?v=2024-06-17T11:56:20.635Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-azure-48.svg?v=2024-06-17T11:55:15.432Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-react.svg?v=2024-06-17T11:57:39.023Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image
						src="https://uploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-sql-100.png?v=2024-06-17T08:06:53.012Z"
						border-radius="16px"
						max-width="100%"
						srcSet="https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-sql-100.png?v=2024-06-17T08%3A06%3A53.012Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-sql-100.png?v=2024-06-17T08%3A06%3A53.012Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-sql-100.png?v=2024-06-17T08%3A06%3A53.012Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-sql-100.png?v=2024-06-17T08%3A06%3A53.012Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-sql-100.png?v=2024-06-17T08%3A06%3A53.012Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-sql-100.png?v=2024-06-17T08%3A06%3A53.012Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-sql-100.png?v=2024-06-17T08%3A06%3A53.012Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2030.svg?v=2021-08-27T23:06:50.610Z" border-radius="16px" max-width="100%" />
				</Box>
			</Box>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
			quarkly-title="Form-1"
		>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" md-width="100%">
					<Box>
						<Box
							sm-padding="64px 0 0 0"
							margin="32px 0 0 0"
							max-width="360px"
							position="relative"
							padding="0 0 0 64px"
						>
							<Icon
								size="48px"
								top="0"
								left="0"
								category="md"
								icon={MdLocationOn}
								position="absolute"
							/>
							<Text as="h4" margin="6px 0" font="--base">
								Contact US
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								Please! Send me an email if you want to talk
							</Text>
						</Box>
						<Box
							position="relative"
							padding="0 0 0 64px"
							sm-padding="64px 0 0 0"
							margin="64px 0 0 0"
							max-width="360px"
						>
							<Icon
								top="0"
								left="0"
								category="md"
								icon={MdEmail}
								position="absolute"
								size="48px"
							/>
							<Text font="--base" as="h4" margin="6px 0">
								Email us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								<Link href="mailto:issac.degollado@gmail.com" text-decoration="none" hover-text-decoration="underline" color="--light">
									issac.degollado@gmail.com
								</Link>
							</Text>
						</Box>
						<Box padding="0 0 0 64px" margin="64px 0 0 0" max-width="360px" position="relative">
							<Icon
								left="0"
								category="md"
								icon={MdPhone}
								position="absolute"
								size="48px"
								top="0"
							/>
							<Text font="--base" as="h4" margin="6px 0">
								Call us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								+52 (868) 308-91-**
								<br />
							</Text>
						</Box>
						<Box
							sm-padding="0"
							margin="48px 0"
							max-width="360px"
							position="relative"
							display="flex"
							padding="0 0 0 64px"
						>
							<LinkBox margin="0px 16px 0px 0px" href="https://www.linkedin.com/in/idegollado">
								<Icon
									category="fa"
									icon={FaLinkedinIn}
									width="48px"
									height="48px"
									size="24px"
									background="--color-primary"
									border-radius="50%"
									color="--light"
									margin="0px 0px 0px 0px"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" md-width="100%">
					<Box>
						<Box
							padding="56px 48px"
							margin="0 0 0 auto"
							md-max-width="100%"
							background="--color-primary"
							max-width="360px"
						>
							<Text as="h3" font="--headline3" margin="0 0 20px 0">
								Leave us message
							</Text>
							<Formspree endpoint="xeqpgrlv">
								<Box gap="16px" display="flex" flex-direction="row" flex-wrap="wrap">
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text margin="0 0 4px 0" font="--base">
												Name
											</Text>
											<Input max-width="400px" width="100%" name="name" />
										</Box>
									</Box>
									<Box width="100%" padding="8px 8px 8px 8px">
										<Box display="flex" flex-direction="column">
											<Text font="--base" margin="0 0 4px 0">
												Email
											</Text>
											<Input max-width="400px" width="100%" type="email" name="email" />
										</Box>
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text font="--base" margin="0 0 4px 0">
												Message
											</Text>
											<Input width="100%" name="message" as="textarea" rows="4" />
										</Box>
									</Box>
									<Box width="100%" padding="8px 8px 8px 8px">
										<Box display="flex" flex-direction="column" align-items="flex-start">
											<Button background="--color-dark">
												Send
											</Button>
										</Box>
									</Box>
								</Box>
							</Formspree>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"666fda49fdcae00021e37360"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});