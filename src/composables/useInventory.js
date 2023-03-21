// useInventory.js
import { ref, computed } from 'vue'

const inventory = ref([])
const filter = ref('')

export default function useInventory() {
  const total = computed(() => inventory.value.length)

  function add(item) {
    const existingItem = inventory.value.find((i) => i.name === item.name)
    if (existingItem) {
      existingItem.amount++
    } else {
      item.amount = 1
      inventory.value.push(item)
    }
  }

  function getItemCount(itemName) {
    const item = inventory.value.find((i) => i.name === itemName)
    if (!item) { return 0 }
    return item.amount
  }

  function remove(itemName) {
    const item = inventory.value.find((i) => i.name === itemName)
    if (!item) { return }
    if (item.amount > 0) {
      item.amount--
      return item.value
    }
    return 0
  }

  function removeMultiple(item, amount) {
    const index = inventory.value.indexOf(item)
    if (index > -1) {
      inventory.value.splice(index, amount)
    }
    return item.value * amount
  }

  function get() {
    console.warn(`Please use getInventory() or getFilteredInventory() instead of get()`)
    return inventory.value
  }

  const getInventory = computed(() => {
    return inventory.value
  })

  const getFilteredInventory = computed(() => {
    if (!filter.value) { return inventory.value }
    return inventory.value.filter((item) => item.name.toLowerCase().includes(filter.value.toLowerCase()))
  })

  return {
    total,
    add,
    remove,
    get,
    getItemCount,
    filter,
    getFilteredInventory,
    getInventory,
  }
}
