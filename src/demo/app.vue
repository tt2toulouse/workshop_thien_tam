<template>
   <div id="app">
      <ul>
         <li>
            <router-link to="/test-path">nom de mon test</router-link>
         </li>
      </ul>
      <div>
         <router-view class="view"/>
      </div>
   </div>
</template>
