<template>
  <div class="min-h-screen py-24">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between">
        <h1 class="text-5xl font-bold mb-2">The Coffee House</h1>
        <div class="flex items-center">
          <p class="text-red-800 font-bold text-2xl">The shop is closed</p>
          <button class="px-4 py-2 bg-green-600 text-black font-bold rounded-md ml-8">
            Open Shop
          </button>
        </div>
      </div>
      <hr class="border-black mb-4">
      <p class="text-lg">A coffee shop for coffee lovers.</p>

      <div class="mt-32">
        <OrderLists/>
      </div>
    </div>


  </div>
</template>

<script>
import OrderLists from "@/components/OrderLists";

export default {
  name: 'App',
  components: {OrderLists},
}
</script>
