<template>
    

      <!--Full pageloader-->
        <!-- Pageloader -->
        <div class="pageloader is-full"></div>
        <div class="infraloader is-full is-active"></div>
        <div class="auth-wrapper">
            <!--Page body-->           
            <router-view></router-view>

       </div>
    

        
   
</template>

 <script>
    export default {
          name: "AuthPage",
    }
    </script>