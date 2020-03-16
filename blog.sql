-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  lun. 16 mars 2020 à 17:02
-- Version du serveur :  10.3.16-MariaDB
-- Version de PHP :  7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `blog`
--

-- --------------------------------------------------------

--
-- Structure de la table `billets`
--

CREATE TABLE `billets` (
  `id` smallint(6) NOT NULL,
  `auteur` varchar(30) NOT NULL,
  `titre` varchar(100) NOT NULL,
  `contenu` text NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `billets`
--

INSERT INTO `billets` (`id`, `auteur`, `titre`, `contenu`, `date`) VALUES
(1, 'Jean Forteroche', 'Titre 01', '<p>Compellingly integrate interdependent core competencies via go forward core competencies. Progressively utilize diverse products vis-a-vis emerging services. Continually utilize multimedia based products after robust schemas. Phosfluorescently unleash frictionless manufactured products whereas quality portals. Distinctively morph excellent bandwidth after holistic web services.</p>', '2020-03-02 09:00:00'),
(2, 'Jean Forteroche', 'Titre 02', '<p>Dramatically re-engineer low-risk high-yield web-readiness and 24/365 paradigms. Continually exploit one-to-one leadership skills with frictionless results. Completely brand innovative information with dynamic strategic theme areas. Dynamically exploit scalable paradigms vis-a-vis team building alignments. Monotonectally synthesize long-term high-impact markets for distinctive applications.\r\n\r\nCompetently fabricate distributed e-tailers rather than superior customer service. Objectively streamline resource maximizing web services before end-to-end scenarios. Compellingly disintermediate frictionless processes rather than equity invested action items. Credibly deliver turnkey strategic theme areas and viral leadership skills.</p>', '2020-03-02 11:00:00'),
(3, 'Jean Forteroche', 'Titre 03', '<p>Globally exploit maintainable process improvements rather than collaborative scenarios. Quickly morph sticky communities and professional relationships. Proactively fabricate end-to-end channels before user-centric \"outside the box\" thinking. Distinctively disintermediate high-quality initiatives after highly efficient alignments. Uniquely syndicate extensive systems through low-risk high-yield initiatives.\r\n\r\nDramatically promote cost effective internal or \"organic\" sources through interoperable architectures. Objectively streamline compelling interfaces vis-a-vis 24/365 services. Quickly actualize empowered results for synergistic e-tailers. Professionally syndicate strategic methods of empowerment with global results. Phosfluorescently exploit installed base resources rather than best-of-breed human capital.\r\n\r\nUniquely reinvent functionalized web-readiness and reliable process improvements. Proactively pontificate emerging.</p>', '2020-03-02 11:24:00'),
(4, 'Jean Forteroche', 'Titre 04', '<p>Dramatically matrix error-free innovation through revolutionary manufactured products. Assertively fabricate focused synergy with covalent core competencies. Authoritatively target resource-leveling synergy before cross-unit models. Conveniently conceptualize distinctive expertise through mission-critical functionalities. Objectively transform synergistic initiatives via premium internal or \"organic\" sources.\r\n\r\nObjectively repurpose unique relationships without innovative applications. Appropriately expedite interactive value through cross-platform methodologies. Compellingly promote enterprise convergence for business e-business. Assertively visualize ethical manufactured products via best-of-breed potentialities. Distinctively implement scalable meta-services vis-a-vis user-centric e-services.</p>', '2020-03-02 13:24:00'),
(5, 'Jean Forteroche', 'Titre 05', '<p>Rapidiously pontificate go forward infrastructures vis-a-vis excellent quality vectors. Efficiently restore focused value and enterprise-wide deliverables. Conveniently target business imperatives via exceptional manufactured products. Interactively embrace intuitive potentialities with worldwide scenarios. Professionally procrastinate tactical technologies with state of the art architectures.\r\n\r\nUniquely build tactical e-commerce and client-centric niche markets. Dynamically exploit seamless content before distinctive materials. Intrinsicly generate 24/7 opportunities through collaborative models. Dramatically whiteboard resource-leveling platforms with backward-compatible schemas. Intrinsicly evolve one-to-one e-tailers whereas B2C niches.\r\n\r\nCompetently network holistic data with 2.0 functionalities. Monotonectally drive worldwide.</p>', '2020-03-02 13:36:00'),
(6, 'Jean Forteroche', 'Titre 06', '<p>Synergistically plagiarize orthogonal niches vis-a-vis vertical niche markets. Compellingly fabricate client-centered \"outside the box\" thinking via resource sucking niche markets. Credibly drive granular value whereas real-time products. Appropriately provide access to bricks-and-clicks schemas without fully researched intellectual capital. Phosfluorescently disintermediate frictionless convergence via tactical intellectual capital.\r\n\r\nEnergistically streamline end-to-end core competencies through flexible supply chains. Continually disseminate goal-oriented best practices and diverse opportunities. Interactively customize 24/7 bandwidth vis-a-vis innovative catalysts for change. Proactively supply team driven intellectual capital after top-line testing procedures. Globally underwhelm extensible alignments vis-a-vis client-focused convergence.\r\n\r\nQuickly develop intermandated metrics for frictionless total linkage. Proactively seize backend infrastructures.</p>', '2020-03-02 14:15:00'),
(7, 'Jean Forteroche', 'Titre 07', '<h3>Titre 07</h3>\r\n<p>Objectively extend standards compliant channels vis-a-vis multidisciplinary process improvements. Interactively utilize magnetic web-readiness before client-focused products. Dynamically extend progressive platforms before emerging opportunities. Energistically provide access to an expanded array of products with out-of-the-box value. Compellingly leverage existing transparent technology whereas reliable initiatives.</p>\r\n<p>Distinctively reintermediate end-to-end channels rather than B2C core competencies. Rapidiously formulate holistic paradigms and interactive ideas. Rapidiously underwhelm fully tested functionalities rather than diverse niche markets. Completely develop next-generation scenarios with equity invested ideas. Holisticly parallel task orthogonal intellectual.</p>', '2020-03-02 15:11:00'),
(8, 'Jean Forteroche', 'Titre 08', '<h3>Titre 08</h3>\r\n<p>Appropriately underwhelm technically sound materials whereas customer directed resources. Dynamically extend e-business supply chains rather than collaborative e-business. Competently exploit diverse intellectual capital and resource maximizing benefits. Objectively create 24/7 human capital without optimal niches. Progressively aggregate innovative paradigms whereas goal-oriented metrics.</p>\r\n<p>&nbsp;</p>\r\n<p>Authoritatively morph front-end solutions before pandemic outsourcing. Objectively leverage existing 2.0 growth strategies with standardized outsourcing. Dramatically cultivate distributed platforms after mission-critical ROI. Conveniently repurpose excellent ROI for market positioning architectures. Competently foster integrated ideas before market-driven infrastructures.</p>\r\n<p>Continually re-engineer ethical convergence without installed base bandwidth. Conveniently pontificate 24/365 scenarios after.</p>', '2020-03-02 16:07:00'),
(9, 'Jean Forteroche', 'Titre 09', '<h3>Titre 09</h3>\r\n<p>Quickly conceptualize open-source best practices through future-proof relationships. Progressively create viral processes for technically sound networks. Competently promote B2B niche markets without future-proof channels. Completely visualize frictionless collaboration and idea-sharing rather than proactive content. Compellingly predominate adaptive communities through resource-leveling testing procedures.</p>\r\n<p>&nbsp;</p>\r\n<p>Authoritatively embrace frictionless customer service with stand-alone ideas. Efficiently envisioneer resource maximizing niches before mission-critical expertise. Professionally extend technically sound systems rather than plug-and-play human capital. Synergistically optimize functionalized value through just in time action items. Energistically mesh fully researched schemas before intermandated relationships.</p>\r\n<p>Completely leverage existing multifunctional architectures through ethical ideas. Rapidiously transform bricks-and-clicks portals vis-a-vis efficient potentialities. Dramatically disintermediate user friendly growth strategies via synergistic.</p>', '2020-03-02 16:28:00'),
(10, 'Jean Forteroche', 'Titre 10', '<p>Holisticly fabricate cross-unit relationships for impactful systems. Collaboratively synergize high-quality resources whereas cooperative experiences. Appropriately whiteboard global results via e-business resources. Dynamically engineer standardized initiatives whereas fully tested channels. Assertively extend mission-critical technologies and parallel innovation.</p>\r\n<p>&nbsp;</p>\r\n<p>Enthusiastically redefine economically sound meta-services rather than worldwide human capital. Progressively innovate leveraged content through prospective manufactured products. Synergistically facilitate seamless meta-services without distinctive experiences. Progressively integrate 24/7 interfaces via resource-leveling manufactured products. Quickly maintain strategic solutions whereas ethical interfaces.</p>\r\n<p>Holisticly formulate user friendly processes for.</p>', '2020-03-02 16:34:00'),
(11, 'Jean Forteroche', 'Titre 11', '<p>Completely enable cross functional action items through enterprise-wide catalysts for change. Enthusiastically impact collaborative scenarios through global e-tailers. Seamlessly enhance pandemic alignments through performance based outsourcing. Synergistically predominate intuitive models vis-a-vis multidisciplinary sources. Professionally architect pandemic supply chains with high-payoff scenarios.</p>\r\n<p>&nbsp;</p>\r\n<p>Synergistically reinvent resource sucking data without distributed metrics. Intrinsicly unleash granular ideas without revolutionary content. Dramatically e-enable resource-leveling process improvements via clicks-and-mortar expertise. Quickly orchestrate quality infomediaries vis-a-vis corporate total linkage. Collaboratively predominate 24/365 metrics via innovative synergy.</p>\r\n<p>Rapidiously synergize emerging leadership vis-a-vis out-of-the-box internal or \"organic\" sources. Assertively deliver leading-edge testing procedures before.</p>', '2020-03-02 17:21:00'),
(12, 'Jean Forteroche', 'Titre 12', '<p>Rapidiously extend orthogonal sources via premier architectures. Proactively myocardinate long-term high-impact partnerships rather than B2B processes. Competently exploit future-proof quality vectors whereas equity invested vortals. Rapidiously customize principle-centered bandwidth and open-source innovation. Holisticly enable bleeding-edge potentialities vis-a-vis effective partnerships.</p>\r\n<p>&nbsp;</p>\r\n<p>Rapidiously administrate cooperative communities vis-a-vis innovative architectures. Conveniently develop reliable content through alternative portals. Intrinsicly whiteboard corporate experiences for standardized value. Globally build resource sucking communities after future-proof technologies. Collaboratively drive long-term high-impact architectures through flexible total linkage.</p>\r\n<p>Objectively aggregate best-of-breed ideas vis-a-vis covalent leadership. Holisticly transition revolutionary models through cross-media bandwidth. Holisticly incubate interoperable \"outside the box\" thinking before front-end interfaces.</p>', '2020-03-02 18:14:00'),
(13, 'Jean Forteroche', 'Titre 13', '<p>Continually drive unique methodologies vis-a-vis multifunctional systems. Authoritatively harness high-quality total linkage rather than integrated process improvements. Continually brand progressive meta-services whereas client-based content. Compellingly negotiate an expanded array of users without high-payoff technologies. Professionally transform empowered expertise whereas open-source meta-services.</p>\r\n<p>Professionally provide access to quality catalysts for change before sticky core competencies. Phosfluorescently innovate multifunctional opportunities rather than high-quality processes. Authoritatively harness goal-oriented e-tailers without dynamic total linkage. Assertively customize impactful processes through maintainable markets. Dramatically redefine alternative imperatives for pandemic leadership.</p>\r\n<p>Globally impact team driven.</p>', '2020-03-02 18:45:00'),
(14, 'Jean Forteroche', 'Titre 14', '<p>Distinctively target competitive infrastructures rather than front-end outsourcing. Proactively seize professional web services rather than goal-oriented potentialities. Synergistically expedite low-risk high-yield synergy vis-a-vis collaborative communities. Appropriately unleash visionary core competencies via cost effective expertise. Assertively exploit highly efficient imperatives after reliable results.</p>\r\n<p>Seamlessly re-engineer best-of-breed \"outside the box\" thinking with 24/365 systems. Dynamically maintain functional action items through cutting-edge portals. Dynamically optimize cross-platform e-tailers with vertical ideas. Interactively negotiate standardized markets and team driven e-markets. Globally deliver fully tested total linkage whereas distinctive methodologies.</p>\r\n<p>Competently pontificate effective technology for granular metrics. Distinctively mesh fully researched users for client-centered customer service.</p>', '2020-03-02 19:10:00'),
(15, 'Jean Forteroche', 'Titre 15', '<h1><span style=\"font-family: \'book antiqua\', palatino, serif;\">Titre 15</span></h1>\r\n<h2 style=\"text-align: center;\"><span style=\"font-family: \'book antiqua\', palatino, serif;\">Titre 15</span></h2>\r\n<h3 style=\"text-align: right; padding-left: 40px;\"><span style=\"font-family: \'book antiqua\', palatino, serif;\">Titre 15</span></h3>\r\n<p style=\"text-align: justify;\"><span style=\"font-family: \'book antiqua\', palatino, serif;\"><em>Interactively seize inexpensive functionalities for multidisciplinary customer service. Appropriately expedite team building leadership skills whereas pandemic models. Energistically fabricate resource-leveling solutions rather than distributed core competencies. Objectively cultivate future-proof processes rather than intermandated niches. Rapidiously implement 24/7 synergy and multifunctional processes.</em></span></p>\r\n<p><span style=\"font-family: \'book antiqua\', palatino, serif;\"><strong>Competently develop clicks-and-mortar process improvements whereas customized technologies. Globally revolutionize market positioning action items without fully tested expertise. Progressively incubate optimal technologies through synergistic e-tailers. Uniquely e-enable client-focused sources.</strong></span></p>\r\n<p><span style=\"text-decoration: underline; font-family: \'book antiqua\', palatino, serif;\">Collaboratively pontificate premier quality vectors via end-to-end architectures. Continually incentivize extensive alignments without front-end web services. Appropriately envisioneer 2.0 paradigms via corporate markets. Assertively disseminate seamless web-readiness before enterprise.</span></p>', '2020-03-02 20:15:00'),
(16, 'Jean Forteroche', 'Titre 16', '<p>Credibly monetize low-risk high-yield portals without worldwide potentialities. Credibly cultivate e-business portals whereas emerging meta-services. Collaboratively restore low-risk high-yield collaboration and idea-sharing before front-end experiences. Competently harness low-risk high-yield core competencies rather than interdependent customer service. Efficiently evolve team driven growth strategies via revolutionary testing procedures.&nbsp; TEST</p>\r\n<p>Appropriately harness bleeding-edge scenarios through bricks-and-clicks functionalities. Intrinsicly fabricate corporate initiatives for resource-leveling services. Continually restore B2C deliverables through intermandated total linkage.</p>', '2020-03-03 09:27:00'),
(17, 'Jean Forteroche', 'Titre 17', '<p>Phosfluorescently recaptiualize extensible services with backend ideas. Appropriately productize just in time benefits without process-centric total linkage. Competently envisioneer out-of-the-box growth strategies without interactive processes. Dynamically customize reliable niche markets for intermandated architectures. Enthusiastically extend plug-and-play networks before inexpensive initiatives.</p>\r\n<p>Interactively synergize covalent communities after user friendly systems. Assertively engineer 24/365 e-tailers after proactive solutions. Assertively plagiarize flexible innovation via end-to-end portals. Intrinsicly recaptiualize synergistic experiences whereas equity invested metrics. Collaboratively leverage existing multidisciplinary infrastructures through multifunctional niches.</p>\r\n<p>Dramatically facilitate inexpensive communities.</p>', '2020-03-02 11:37:00');

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE `commentaires` (
  `id` mediumint(9) NOT NULL,
  `billetId` smallint(6) NOT NULL,
  `auteur` varchar(30) NOT NULL,
  `contenu` text NOT NULL,
  `date` datetime NOT NULL,
  `signale` tinyint(1) NOT NULL,
  `modere` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `commentaires`
--

INSERT INTO `commentaires` (`id`, `billetId`, `auteur`, `contenu`, `date`, `signale`, `modere`) VALUES
(1, 16, 'Commentateur 01', 'Authoritatively e-enable resource-leveling supply chains whereas resource sucking e-business. Globally reinvent equity invested convergence via holistic testing procedures. Quickly.', '2020-03-02 09:29:18', 1, 0),
(2, 16, 'Commentateur 02', 'Credibly redefine worldwide convergence through cross functional action items. Continually impact bleeding-edge ideas for plug-and-play collaboration and idea-sharing. Appropriately cultivate corporate initiatives whereas mission-critical vortals. Enthusiastically administrate quality.', '2020-03-02 09:29:34', 1, 0),
(3, 16, 'Commentateur 03', 'Phosfluorescently utilize highly efficient platforms before B2C intellectual capital. Competently evisculate user friendly growth strategies via strategic initiatives. Quickly synergize cross-platform.', '2020-03-02 09:29:52', 0, 0),
(4, 16, 'Commentateur 04', 'Dynamically actualize team building systems without team building internal or &quot;organic&quot; sources. Dynamically pontificate granular experiences with global process improvements. Energistically utilize principle-centered internal or &quot;organic&quot; sources for world-class networks. Progressively engage.', '2020-03-02 09:30:12', 0, 0),
(5, 16, 'Commentateur 05', 'Completely brand stand-alone action items vis-a-vis reliable technologies. Conveniently harness efficient growth strategies rather than enabled content. Objectively underwhelm extensible systems with reliable core competencies. Efficiently cultivate top-line.', '2020-03-02 09:30:30', 0, 0),
(6, 16, 'Commentateur 06', 'Completely brand stand-alone action items vis-a-vis reliable technologies. Conveniently harness efficient growth strategies rather than enabled content. Objectively underwhelm extensible systems with reliable core competencies. Efficiently cultivate top-line.', '2020-03-02 09:30:54', 0, 0),
(7, 15, 'Commentateur 07', 'Dynamically disseminate an expanded array of users and robust partnerships. Competently target enterprise-wide e-markets whereas go forward deliverables. Synergistically e-enable standardized intellectual capital for fully researched.', '2020-03-02 09:34:08', 0, 0),
(8, 15, 'Commentateur 08', 'Assertively develop leveraged process improvements rather than equity invested systems. Efficiently cultivate integrated.', '2020-03-02 09:34:22', 0, 0),
(9, 15, 'Commentateur 12', 'Completely streamline stand-alone collaboration and idea-sharing without exceptional content. Enthusiastically utilize virtual data and cross-media action items. Collaboratively actualize ethical metrics.', '2020-03-03 16:54:01', 0, 0),
(10, 15, '&lt;h1&gt;test&lt;/h1&gt;', '&lt;i&gt;test&lt;/i&gt;', '2020-03-04 08:34:04', 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `docfile`
--

CREATE TABLE `docfile` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `file_url` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `emails`
--

CREATE TABLE `emails` (
  `id` int(11) NOT NULL,
  `emails` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `imgfile`
--

CREATE TABLE `imgfile` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `file_url` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` char(30) NOT NULL,
  `password` char(255) NOT NULL,
  `role` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
(1, 'Jean_Forteroche', '$2y$12$qFYiPTEKTFVMSEyKg63uj./NHwtJ4BL6rjKn1Fgy9a5RSCTpMUnuq', '');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `billets`
--
ALTER TABLE `billets`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Continuite` (`billetId`);

--
-- Index pour la table `docfile`
--
ALTER TABLE `docfile`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `Continuite2` (`userId`);

--
-- Index pour la table `emails`
--
ALTER TABLE `emails`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `imgfile`
--
ALTER TABLE `imgfile`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `Continuite3` (`userId`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `billets`
--
ALTER TABLE `billets`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `commentaires`
--
ALTER TABLE `commentaires`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `docfile`
--
ALTER TABLE `docfile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `emails`
--
ALTER TABLE `emails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `imgfile`
--
ALTER TABLE `imgfile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD CONSTRAINT `Continuite` FOREIGN KEY (`billetId`) REFERENCES `billets` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Contraintes pour la table `docfile`
--
ALTER TABLE `docfile`
  ADD CONSTRAINT `Continuite2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Contraintes pour la table `imgfile`
--
ALTER TABLE `imgfile`
  ADD CONSTRAINT `Continuite3` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
