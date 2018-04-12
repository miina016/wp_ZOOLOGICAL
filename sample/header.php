<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
<!--    <link rel="stylesheet" href="css/common.css">-->
<!--    <link rel="stylesheet" href="css/style.css">-->
<!--    <link rel="stylesheet" href="css/responsive.css" media="screen and (max-width:480px)">-->
<!--    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>-->
<!--    <script src="js/slideshow2.js"></script>-->
<!--    <script src="js/pagetop.js"></script>-->
<!--    <script src="js/dropdown.js"></script>-->
    <script>
        $(function () {
            $("#graphic").SlideShow({
                slideSpeed: 3000
            });
        });
    </script>
    <script>
        $(function(){
            $("#pagetop").PageTop({speed: 1000
            });
        });
    </script>
    <script>
        $(function(){
            $("#navdown").DropDown({speed: 1000
            });
        });
    </script>
<?php wp_head(); ?>

</head>

<body>
<header>
    <h1>
        <a href="<?php echo home_url(); ?>"><img src="<?php header_image(); ?>" width="244" height="76" alt="ZOO LOGICAL"></a>
    </h1>
</header>

<?php if (has_nav_menu('primary')) : ?>
<nav class = "nav-global">
    <?php
    wp_nav_menu( array(
            'theme_location' => 'primary'
    ));
    ?>
    <?php
    if ( shortcode_exists( 'wp-structuring-markup-breadcrumb' ) ) {
        echo do_shortcode( '[wp-structuring-markup-breadcrumb]' );
    }
    ?>
    
</nav>
    <?php endif; ?>

