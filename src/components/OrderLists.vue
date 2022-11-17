<template>
  <div>
    <div class="mb-8">
      <input type="text" class="border rounded-md px-2 py-2" placeholder="Name">
      <button type="submit" class="bg-black text-white px-4 py-2 rounded-md ml-2">Add Order</button>
    </div>
    <div class="mt-32 grid grid-cols-2 gap-x-8">
      <div>
        <p class="font-bold underline text-2xl mb-4">Available Orders</p>
        <ul class="flex flex-col gap-y-2">
          <li>
            <div class="border rounded-md px-2 py-2 bg-white text-black w-96">
              <p class="text-lg mb-1">ID: #1</p>
              <p class="text-lg font-bold">Coffee</p>

              <button class="px-2 py-1 text-white bg-green-800 rounded-md mt-2">Serve</button>
            </div>
          </li>
          <li>
            <div class="border rounded-md px-2 py-2 bg-white text-black w-96">
              <p class="text-lg mb-1">ID: #2</p>
              <p class="text-lg font-bold">Tea</p>

              <button class="px-2 py-1 text-white bg-green-800 rounded-md mt-2">Serve</button>
            </div>
          </li>
          <li>
            <div class="border rounded-md px-2 py-2 bg-white text-black w-96">
              <p class="text-lg mb-1">ID: #3</p>
              <p class="text-lg font-bold">Cappuccino</p>

              <button class="px-2 py-1 text-white bg-green-800 rounded-md mt-2">Serve</button>
            </div>
          </li>
          <li>
            <div class="border rounded-md px-2 py-2 bg-white text-black w-96">
              <p class="text-lg mb-1">ID: #4</p>
              <p class="text-lg font-bold">Americano</p>
              <button class="px-2 py-1 text-white bg-green-800 rounded-md mt-2">Serve</button>
            </div>
          </li>
        </ul>

      </div>
      <div>
        <p class="font-bold underline text-2xl mb-4">Completed Orders</p>
        <ul class="flex flex-col gap-y-2">
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderLists',
}
</script>
