<template>
  <v-container fluid>
    <v-layout class="ma-0 ba-0 pa-0">
      <v-flex xs12 class="">
        <v-layout class="" fill-height style="height: 550px" align-center>
          <v-flex xs5 class="">
            <PrincipalMenu />
          </v-flex>
          
          <v-flex xs7 class="">
            <CompanyLogo v-if="stand_by"/>
             <Person v-if="! stand_by" />
            

              

          </v-flex>
        </v-layout>

      </v-flex>
      <!-- <v-flex xs7 class="">
        <v-layout class="" fill-height style="height: 550px" align-center>
          <v-flex class="">
           
            <Person />
          </v-flex>
        </v-layout>
      </v-flex> -->
    </v-layout>
    <ContractSelector/>
  </v-container>
</template>


<script>
import PrincipalMenu from "../components/PrincipalMenu";
import CompanyLogo from "../components/CompanyLogo";
import Person from "../components/Person";
import ContractSelector from '../components/ContractSelector';

import { mapState } from "vuex";
export default {
  name: "MainOros",
  components: {
    PrincipalMenu,
    CompanyLogo,
    Person,
    ContractSelector
  },
  data() {
    return {};
  },

  computed: {
    ...mapState(["panel_active","stand_by"]),
  },
};
</script>


<style>
</style>