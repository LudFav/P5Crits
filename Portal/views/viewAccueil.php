

 
<div id="main">

<!-- Featured Post -->
    <article class="post featured">
		<header class="major">
            <div class="post-info" data-trf="<?=$billet[0]->id()?>"></div>
			<span class="date"><?php $newDate = date('d/m/Y H:i', strtotime($billet[0]->date())); echo $newDate;?></span>
			<h2><?=$billet[0]->titre()?></h2>
			<?=$billet[0]->contenu_cut()?>
		</header>
		<a href="post&id=<?=$billet[0]->id()?>" class="image main"><img src="<?= $billet[0]->image() ?>" alt="image <?=$billet[0]->titre()?>" /></a>
		<ul class="actions special">
			<li><a href="post&id=<?=$billet[0]->id()?>" class="button large">Lire Article</a></li>
		</ul>
    </article>
</div>
