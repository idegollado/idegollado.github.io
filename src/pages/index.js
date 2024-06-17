import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, LinkBox, Box, Section, Image, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia, Formspree } from "@quarkly/components";
import * as Components from "components";
import { GiVanDammeSplit, GiFairyWings } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-2">
			<Override
				slot="SectionContent"
				flex-direction="column"
				justify-content="space-between"
				align-items="center"
				lg-flex-direction="row"
			/>
			<Box
				display="flex"
				padding="12px 0 18px 0"
				justify-content="center"
				align-items="flex-start"
				flex-direction="row"
				width="100%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="70%"
				md-justify-content="flex-start"
				lg-justify-content="flex-start"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="18px">
					<Icon category="gi" icon={GiVanDammeSplit} color="#6d32ec" size="37px" />
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--headline3"
						sm-margin="0px 0 0px 0"
						display="block"
					>
						My Profile
					</Text>
				</LinkBox>
			</Box>
			<Components.QuarklycommunityKitMobileSidePanel
				menuPosition="full"
				breakpoint="lg"
				width="100%"
				sm-width="50%"
				md-width="50%"
				lg-width="30%"
				justify-content="center"
				lg-justify-content="flex-end"
			>
				<Override slot="Children" md-display="flex" />
				<Override
					slot="Content"
					padding="0px 0px 0px 0px"
					background="rgba(255, 255, 255, 0)"
					lg-background="#ffffff"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Text"
					font="normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					text-transform="uppercase"
					letter-spacing="1px"
					sm-font="normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-margin="0px 2px 0px 0px"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Icon :closed"
					category="fi"
					icon={FiMenu}
					size="32px"
					padding="5px 7px 5px 7px"
					border-radius="50px"
				/>
				<Override
					slot="Button Icon"
					width="28px"
					height="28px"
					category="fi"
					icon={FiMenu}
					color="--dark"
					size="24px"
					lg-width="32px"
					lg-height="32px"
				/>
				<Override
					slot="Cross"
					lg-width="32px"
					lg-height="32px"
					size="32px"
					top="24px"
					right="24px"
				/>
				<Box
					align-items="center"
					lg-justify-content="center"
					lg-align-items="flex-start"
					justify-content="center"
					display="flex"
					lg-flex-direction="column"
					lg-margin="0px auto 0px auto"
					lg-min-width="300px"
					lg-max-width="1280px"
					lg-width="90%"
					lg-padding="24px 0px 48px 0px"
				>
					<Box
						display="none"
						lg-width="100%"
						lg-margin="0px 0px 24px 0px"
						lg-display="flex"
						lg-padding="12px 0px 12px 0px"
					>
						<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="18px">
							<Icon category="gi" icon={GiFairyWings} color="#6d32ec" size="37px" />
							<Text
								margin="0"
								md-margin="0px 0 0px 0"
								text-align="left"
								font="--headline3"
								sm-margin="0px 0 0px 0"
								display="block"
							>
								Awesome Company
							</Text>
						</LinkBox>
					</Box>
					<Components.QuarklycommunityKitMenu
						display="flex"
						filterMode="exclude"
						filterPages="/index"
						grid-gap="8px"
						lg-flex-direction="column"
						lg-padding="6px 0px 6px 0px"
						lg-margin="0px 0px 24px 0px"
						align-items="center"
						flex-wrap="wrap"
						overflow-x="visible"
						overflow-y="visible"
						lg-align-items="flex-start"
					>
						<Override
							slot="link"
							color="--darkL2"
							hover-color="--primary"
							font="--lead"
							text-decoration-line="initial"
							transition="color 0.1s ease 0s"
							lg-font="--lead"
						/>
						<Override slot="item-active" border-width={0} />
						<Override slot="item" padding="6px 8px 6px 8px" />
						<Override slot="link-active" cursor="default" color="--primary" />
						<Override slot="link-about" />
					</Components.QuarklycommunityKitMenu>
					<Box
						width="25%"
						display="none"
						lg-width="100%"
						lg-flex-direction="column"
						lg-align-items="flex-start"
						lg-display="flex"
						justify-content="space-around"
						align-items="center"
						flex-wrap="wrap"
						lg-margin="0px 0px 0px 0px"
					>
						<Link
							font="--lead"
							padding="10px 0px 10px 0px"
							margin="0px 0px 6px 0px"
							href="tel:12345678"
							text-decoration-line="initial"
							color="--dark"
							lg-margin="0px 0px 24px 0px"
						>
							+1(234)567-89-00
						</Link>
						<SocialMedia
							instagram="https://instagram.com/instagram"
							margin="0px 0px 0px 0px"
							facebook="https://www.facebook.com/quarklyapp/"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							lg-display="flex"
							lg-grid-gap="12px"
						>
							<Override slot="link-twitter" margin="0px 0px 0px 5px">
								<div />
							</Override>
							<Override
								slot="link"
								border-radius="50%"
								background="transparent"
								hover-color="--light"
								display="flex"
								margin="0 5px 0 5px"
								padding="5x 5px 5px 5px"
								width="32px"
								height="32px"
								align-items="center"
								justify-content="center"
							/>
							<Override slot="icon" size="32px" border-radius="50px" color="--darkL2" />
							<Override slot="link-facebook" margin="0px 5px 0px 0px">
								<div />
							</Override>
						</SocialMedia>
					</Box>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section
			padding="80px 0 80px 0"
			sm-padding="60px 0 60px 0"
			align-items="center"
			background="--color-lightD2"
			lg-background="--color-lightD2"
		>
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="center"
				md-width="100%"
				padding="0px 0px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
				md-margin="0px 0px 30px 0px"
				align-items="center"
			>
				<Image
					max-width="340px"
					src="https://uploads.quarkly.io/666fda49fdcae00021e37362/images/portfolio.jpg?v=2024-06-17T07:37:20.066Z"
					md-margin="0px 0px 20px 0px"
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
					Hey! I’m Node.js Developer
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="--base">
					Hey! I guess you are here for my amazing marketing campaign. And you are searching, probably, for a back-end developer.
					<br />
					I have many years of experience using Node.JS and I think I can help you in with your problems.
				</Text>
				<Text margin="0px 0px 0px 0px" color="--darkL2" font="--base">
					Apart of my strong background in Node.js, I've used different could platforms (Azure and AWS) with many services.
					<br />
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" lg-padding="60px 0 60px 0" md-padding="40px 0 40px 0" sm-padding="30px 0 30px 0">
			<Box
				margin="0px 0px 32px 0px"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				lg-align-items="center"
			>
				<Text
					font="--headline1"
					color="--primary"
					text-align="center"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					margin="16px 0px 0px 0px"
				>
					Work Experience
				</Text>
				<Text font="--lead" color="--darkL2" max-width="600px">
					This are some motives you need to hire me.
				</Text>
			</Box>
			<LinkBox
				display="flex"
				margin="0px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-direction="row"
				align-items="flex-start"
				flex-wrap="wrap"
				lg-margin="0px 0px 16px 0px"
			>
				<Box
					width="60%"
					padding="0px 16px 0px 0px"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					margin="0px 0px 0px 0px"
					md-width="100%"
					lg-width="100%"
					lg-padding="0px 0px 0px 0px"
				>
					<Image
						src="https://uploads.quarkly.io/666fda49fdcae00021e37362/images/ksquare.jpg?v=2024-06-17T07:55:07.271Z"
						border-radius="24px"
						max-width="100%"
						width="100%"
						object-fit="none"
						lg-max-height="392px"
						sm-max-height="213px"
						max-height="fit-content"
						srcSet="https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/ksquare.jpg?v=2024-06-17T07%3A55%3A07.271Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/ksquare.jpg?v=2024-06-17T07%3A55%3A07.271Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/ksquare.jpg?v=2024-06-17T07%3A55%3A07.271Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/ksquare.jpg?v=2024-06-17T07%3A55%3A07.271Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/ksquare.jpg?v=2024-06-17T07%3A55%3A07.271Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/ksquare.jpg?v=2024-06-17T07%3A55%3A07.271Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/ksquare.jpg?v=2024-06-17T07%3A55%3A07.271Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					width="40%"
					padding="0px 0px 0px 16px"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-width="100%"
					sm-align-items="flex-start"
					sm-flex-direction="column"
					sm-justify-content="flex-start"
					flex-direction="column"
					lg-width="100%"
					lg-flex-direction="row"
					lg-justify-content="space-between"
					lg-padding="16px 12px 16px 12px"
				>
					<Text margin="0px 0px 16px 0px" font="--lead" color="--darkL2" opacity="0.5">
						2023
					</Text>
					<Box padding="0px 50px 0px 0px" lg-width="70%" sm-width="100%" lg-padding="0px 0px 0px 0px">
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
							ThekSquareGroup
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
							Worked for TheKsquareGroup a company software consultancy. My main responsibilities were creating micro-services to provide new features for a customer web product.
						</Text>
					</Box>
				</Box>
			</LinkBox>
			<LinkBox
				display="flex"
				margin="0px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-direction="row"
				align-items="flex-start"
				flex-wrap="wrap"
				lg-margin="0px 0px 16px 0px"
			>
				<Box
					width="60%"
					padding="0px 16px 0px 0px"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					margin="0px 0px 0px 0px"
					md-width="100%"
					lg-width="100%"
					lg-padding="0px 0px 0px 0px"
					lg-height="fit-content"
				>
					<Image
						src="https://uploads.quarkly.io/666fda49fdcae00021e37362/images/globant.jpeg?v=2024-06-17T07:53:51.003Z"
						border-radius="24px"
						max-width="100%"
						width="100%"
						object-fit="none"
						lg-max-height="392px"
						sm-max-height="213px"
						max-height="fit-content"
						srcSet="https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/globant.jpeg?v=2024-06-17T07%3A53%3A51.003Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/globant.jpeg?v=2024-06-17T07%3A53%3A51.003Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/globant.jpeg?v=2024-06-17T07%3A53%3A51.003Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/globant.jpeg?v=2024-06-17T07%3A53%3A51.003Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/globant.jpeg?v=2024-06-17T07%3A53%3A51.003Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/globant.jpeg?v=2024-06-17T07%3A53%3A51.003Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/globant.jpeg?v=2024-06-17T07%3A53%3A51.003Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					width="40%"
					padding="0px 0px 0px 16px"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-width="100%"
					sm-align-items="flex-start"
					sm-flex-direction="column"
					sm-justify-content="flex-start"
					flex-direction="column"
					lg-width="100%"
					lg-flex-direction="row"
					lg-justify-content="space-between"
					lg-padding="16px 12px 16px 12px"
				>
					<Text margin="0px 0px 16px 0px" font="--lead" color="--darkL2" opacity="0.5">
						2021
					</Text>
					<Box padding="0px 50px 0px 0px" lg-width="70%" lg-padding="0px 0px 0px 0px" sm-width="100%">
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
							Globant
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
							Developed micro-services within with a very interesting suite of Nest.js using mongobd as database.
						</Text>
					</Box>
				</Box>
			</LinkBox>
			<LinkBox
				display="flex"
				margin="0px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-direction="row"
				align-items="flex-start"
				flex-wrap="wrap"
				lg-margin="0px 0px 16px 0px"
			>
				<Box
					width="60%"
					padding="0px 16px 0px 0px"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					margin="0px 0px 0px 0px"
					md-width="100%"
					lg-width="100%"
					lg-padding="0px 0px 0px 0px"
				>
					<Image
						src="https://uploads.quarkly.io/666fda49fdcae00021e37362/images/enviacom.png?v=2024-06-17T07:56:20.091Z"
						border-radius="24px"
						max-width="100%"
						max-height="456px"
						width="100%"
						object-fit="none"
						lg-max-height="392px"
						sm-max-height="213px"
						srcSet="https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/enviacom.png?v=2024-06-17T07%3A56%3A20.091Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/enviacom.png?v=2024-06-17T07%3A56%3A20.091Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/enviacom.png?v=2024-06-17T07%3A56%3A20.091Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/enviacom.png?v=2024-06-17T07%3A56%3A20.091Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/enviacom.png?v=2024-06-17T07%3A56%3A20.091Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/enviacom.png?v=2024-06-17T07%3A56%3A20.091Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/enviacom.png?v=2024-06-17T07%3A56%3A20.091Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					width="40%"
					padding="0px 0px 0px 16px"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-width="100%"
					sm-align-items="flex-start"
					sm-flex-direction="column"
					sm-justify-content="flex-start"
					flex-direction="column"
					lg-width="100%"
					lg-flex-direction="row"
					lg-justify-content="space-between"
					lg-padding="16px 12px 16px 12px"
				>
					<Text margin="0px 0px 16px 0px" font="--lead" color="--darkL2" opacity="0.5">
						2019
					</Text>
					<Box padding="0px 50px 0px 0px" lg-width="70%" lg-padding="0px 0px 0px 0px" sm-width="100%">
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
							Envia.com
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
							Integrated new APIs for international careers.
						</Text>
					</Box>
				</Box>
			</LinkBox>
		</Section>
		<Section padding="80px 0 80px 0" lg-background="--color-lightD2" background="--color-lightD2">
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
					<Image
						src="https://uploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-typescript-100.png?v=2024-06-17T08:05:48.691Z"
						border-radius="16px"
						max-width="100%"
						srcSet="https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-typescript-100.png?v=2024-06-17T08%3A05%3A48.691Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-typescript-100.png?v=2024-06-17T08%3A05%3A48.691Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-typescript-100.png?v=2024-06-17T08%3A05%3A48.691Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-typescript-100.png?v=2024-06-17T08%3A05%3A48.691Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-typescript-100.png?v=2024-06-17T08%3A05%3A48.691Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-typescript-100.png?v=2024-06-17T08%3A05%3A48.691Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-typescript-100.png?v=2024-06-17T08%3A05%3A48.691Z&quality=85&w=3200 3200w"
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
					<Image
						src="https://uploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-azure-96.png?v=2024-06-17T08:08:51.888Z"
						border-radius="16px"
						max-width="100%"
						srcSet="https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-azure-96.png?v=2024-06-17T08%3A08%3A51.888Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-azure-96.png?v=2024-06-17T08%3A08%3A51.888Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-azure-96.png?v=2024-06-17T08%3A08%3A51.888Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-azure-96.png?v=2024-06-17T08%3A08%3A51.888Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-azure-96.png?v=2024-06-17T08%3A08%3A51.888Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-azure-96.png?v=2024-06-17T08%3A08%3A51.888Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-azure-96.png?v=2024-06-17T08%3A08%3A51.888Z&quality=85&w=3200 3200w"
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
					<Image
						src="https://uploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-react-90.png?v=2024-06-17T08:07:44.503Z"
						border-radius="16px"
						max-width="100%"
						srcSet="https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-react-90.png?v=2024-06-17T08%3A07%3A44.503Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-react-90.png?v=2024-06-17T08%3A07%3A44.503Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-react-90.png?v=2024-06-17T08%3A07%3A44.503Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-react-90.png?v=2024-06-17T08%3A07%3A44.503Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-react-90.png?v=2024-06-17T08%3A07%3A44.503Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-react-90.png?v=2024-06-17T08%3A07%3A44.503Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/666fda49fdcae00021e37362/images/icons8-react-90.png?v=2024-06-17T08%3A07%3A44.503Z&quality=85&w=3200 3200w"
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