<template>
  <div class="grid h-screen place-items-center">
    <div class="rounded-lg border-2 border-gray-200 bg-gray-300 p-10 mb-4 shadow-2xl hover:bg-gray-200">
      <h3 class="mb-10 text-lg font-medium text-yellow-900">
        Which Restaurant will you like to visit today?
      </h3>
      <ul class="grid w-full gap-6 md:grid-cols-2">
        <router-link to="/hero">
          <li>
            <input
                type="radio"
                id="hosting-small"
                name="hosting"
                value="hosting-small"
                class="hidden peer"
                required
            />
            <label
                for="hosting-small"
                class="options inline-flex items-center justify-between w-full p-5 text-black border border-gray-200 rounded-lg cursor-pointer peer-checked:border-black peer-checked:text-white hover:text-gray-500 hover:bg-gray-300"
            >
              <div class="block">
                <div class="w-full text-lg font-semibold">Brewed Coffee</div>
                <div class="w-full">All flavors of coffee</div>
              </div>
              <svg
                  aria-hidden="true"
                  class="w-6 h-6 ml-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                ></path>
              </svg>
            </label>
          </li>
        </router-link>
        <router-link to="/dine">
          <li>
            <input
                type="radio"
                id="hosting-big"
                name="hosting"
                value="hosting-big"
                class="hidden peer"
            />
            <label
                for="hosting-big"
                class="options inline-flex items-center justify-between w-full p-5 text-black border border-gray-200 rounded-lg cursor-pointer peer-checked:border-black peer-checked:text-white hover:text-gray-500 hover:bg-gray-300"
            >
              <div class="block">
                <div class="w-full text-lg font-semibold">Dine In</div>
                <div class="w-full">
                  We have both national and international recipes
                </div>
              </div>
              <svg
                  aria-hidden="true"
                  class="w-6 h-6 ml-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                ></path>
              </svg>
            </label>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "RestoOptions",
};
</script>

<style>
.options {
  background-color: #518de0;
}
</style>
