<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="cont">
              <h3>
                Huge Saving
                <span
                  >on UHD
                  <br />
                  Televisions
                </span>
              </h3>
              <p class="hint">Sale up to 70% of on selected item*</p>
              <v-btn
                class="px-10 py-5 d-flex justify-center"
                density="compact"
                color="white"
                variant="outlined"
                style="border-radius: 30px"
              >
                Shop Now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.banner {
  .parent {
    height: 500px;
    background-size: cover;
    background-position: -50px top;
    background-image: url(/src/assets/images/banner-bg.jpg);
    .cont {
      padding: 70px 0 0 100px;
      h3 {
        font-size: 45px;
        font-weight: 900;
        color: rgb(8, 243, 243);
        span {
          color: white;
        }
      }
      .hint {
        margin: 20px 0 40px;
        color: white;
      }
    }
  }
}
</style>
