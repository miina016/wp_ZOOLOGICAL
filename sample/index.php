<?php
get_header(); ?>
<?php if ( has_nav_menu( 'pan' ) ) : ?>
    <nav class="nav-breadcrumb">
        <?php
        wp_nav_menu( array(
            'theme_location' => 'pan'
        ) );
        ?>
    </nav>
<?php endif; ?>
<?php
if(have_posts()): while(have_posts()): the_post();?>
    <div class="contents">
        <main>
            <article>
                <h1><?php the_title(); ?></h1>
                    <?php the_content(); ?>

            </article>
        </main>
        <?php get_sidebar(); ?>
    </div>
<?php endwhile; endif; ?>

<?php get_footer(); ?>