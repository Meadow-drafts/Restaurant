<template>
  <router-view />
</template>

<script>
import './charts/ChartjsConfig';
</script>
<style>
html{
  width:100%;
  overflow-x: hidden;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;
}
/* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>

