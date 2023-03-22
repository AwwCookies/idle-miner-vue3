<template>
  <div class="achievements">
    <ul>
      <li v-for="(achievement, index) in achievements.getCompleted" :key="index">
        <Achievement :achievement="achievement" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useAchievements } from '../composables/useAchievements'
import Achievement from '@/components/Achievement.vue'
const achievements = useAchievements()
</script>