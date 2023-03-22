<template>
  <main>
    <div class="modal" v-show="showModal">
      <div class="modal-content" v-show="showAchievementModal">
        <h2>Achievement</h2>
        <AchievementView />
      </div>
    </div>
    <div class="debug">
      <h2>Debug</h2>
      <DebugView />
    </div>
    <div class="game">
      <header>
        <h1>Idle Miner</h1>
        <h2>🪙Gold: {{ gold.get() }}</h2>
      </header>
      <div class="mine" @click="mine" style="cursor: pointer;">
        <h2>🪨</h2>
      </div>
      <div class="inventory">
        <InventoryView :sell="sell" />
      </div>
      <div class="Achievements">
        <h2>Achievements 🏆</h2>
        <AchievementView />
      </div>
      <div class="talents"></div>
      <div class="mini-buttons">
        <MiniButtons />
      </div>
      <div class="settings">

      </div>
      <div class="player">
        <h2>Player</h2>
        <PlayerView />
      </div>
      <div class="stats">
        <h2>Stats</h2>
        <StatsView />
      </div>
      <div class="logs">
        <h2>Logs</h2>
        <LogView />
      </div>
      <div class="store">
        <h2>Store</h2>
        <ul>
          <li v-for="(item, index) in store" :key="index">
            {{ item.icon }} {{ item.name }}: 🪙{{ item.cost }}
            <button @click="">Buy</button>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useLocalStorage, onKeyUp } from '@vueuse/core'

import InventoryView from './components/InventoryView.vue'
import LogView from './components/LogView.vue'
import DebugView from './components/DebugView.vue'
import MiniButtons from './components/MiniButtons.vue'
import StatsView from './components/StatsView.vue'
import AchievementView from './components/AchievementView.vue'
import PlayerView from './components/PlayerView.vue'
import Modal from './components/Modal.vue'

import useInventory from './composables/useInventory'
import { useGold } from './composables/useGold'
import { useLogs } from './composables/useLogs'
import { useStats } from './composables/useStats'
import { useTalents } from './composables/useTalents'
import { useAchievements } from './composables/useAchievements'
import useMining from './composables/useMining'
import { store } from './data/store'

const { inventory, filter, getFilteredInventory, add, total, remove } = useInventory()
const { mine } = useMining()

const settings = ref({})
const shop = ref({})
const gold = useGold()
const logs = useLogs()
const stats = useStats()
const talents = useTalents(stats)
const achievements = useAchievements()

const showModal = ref(false)
const showAchievementModal = ref(false)

watch(achievements.getCompleted, (Achievements) => {
  console.log(`You have completed ${Achievements.length} Achievements!`)
  console.log(Achievements)
})

// Define keybindings
onKeyUp('Escape', () => {
  showModal.value = false
  // showAchievementModal.value = false
})

onKeyUp('y', () => {
  showAchievementModal.value = !showAchievementModal.value
  showModal.value = !showModal.value
})
// End keybindings

const sell = (itemName) => {
  const sellValue = remove(itemName)
  if (sellValue) {
    gold.add(sellValue)
    logs.add(`You sold a ${itemName} for 🪙${sellValue} gold!`)
  }
}

onMounted(() => {
  setInterval(() => {
    mine()
  }, 1000)
})


</script>

<style scoped>
.game {
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 10px;
}

.mine {
  width: 100px;
  height: 100px;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 50px;
}

ul {
  list-style: none;
  padding: 0;
}

.debug {
  border: 1px solid green;
  padding: 10px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.modal-content {
  background-color: #333333;
  padding: 10px;
  border-radius: 5px;
  max-height: 500px;
  overflow-y: scroll;
}

/* debug */
div {
  border: 1px solid crimson;
}

</style>