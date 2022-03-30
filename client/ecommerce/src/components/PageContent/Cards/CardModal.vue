<template>
<div>
      <div class="modal" id="myModal" >
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title">{{ parentmessage.name}}</h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <!-- Modal body -->
                <div class="modal-body" >
                    <img v-bind:src="parentmessage.imageurl" style="height:275px; width:450px">
                    <br>
                    Sayfa Sayısı: {{ parentmessage.pagecount }}
                    <br>
                    Yayınevi: {{parentmessage.publisher}}
                    <br>
                    Fiyatı: {{ parentmessage.price}}.00 TL
                    
                    
                </div>
                
                <!-- Modal footer -->
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
               </div>
</template>

<script>
export default {
name:"CardModal",
 props: ['parentmessage'],


}
</script>

<style>

</style>