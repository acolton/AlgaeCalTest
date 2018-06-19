function newest_jquery() {

  /* remove jquery version included in wordpress
	wp_deregister_script('jquery');

  /* include newest version of jquery
  wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', array(), null, true);

}
add_action('wp_enqueue_scripts', 'newest_jquery');
