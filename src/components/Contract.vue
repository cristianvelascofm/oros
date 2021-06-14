<template>
  <v-container>
    <v-card>
      <v-card-title class="justify-end">
        <span class="text-h5">
          <h4 class="indigo--text">Nuevo Contrato</h4></span
        >
      </v-card-title>
      <v-tabs
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows
      >
        <v-tabs-slider color="red"></v-tabs-slider>
        <v-tab>General</v-tab>
        <v-tab-item>
          <v-card-text>
            <v-layout
              class="overflow-y-auto pa-5 ma-0 ba-0"
              justify-center
              fill-height
              style="height: 472px"
              id="container-form"
            >
              <v-flex>
                <v-form @submit.prevent="add" class="">
                  <v-flex class="mb-5 text-right">
                    <small>Datos Generales del Contrato</small>
                    <v-divider> </v-divider>
                  </v-flex>
                  <v-autocomplete
                    auto-select-first
                    clearable
                    prepend-icon="mdi-file"
                    color="#023565"
                    :items="contract_type"
                    label="Tipo de Contrato"
                  ></v-autocomplete>

                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Clase del Contrato"
                        prepend-icon="mdi-form-textbox"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex class="pl-3">
                      <v-text-field
                        label="Número de Contrato"
                        prepend-icon="mdi-counter"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="CDP"
                        prepend-icon="mdi-numeric"
                        required
                        hint="Código de Afectación Presupuestal"
                        color="#023565"
                      ></v-text-field>
                    </v-flex>
                    <v-flex class="pl-3">
                      <v-text-field
                        label="Registro"
                        prepend-icon="mdi-registered-trademark"
                        required
                        color="#023565"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-autocomplete
                    auto-select-first
                    prepend-icon="mdi-office-building"
                    clearable
                    color="#023565"
                    :items="dependence"
                    label="Dependecia Afectación Presupuestal"
                  ></v-autocomplete>
                  <v-layout>
                    <v-flex>
                      <v-menu
                        v-model="contract_susctiption_date_picker"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            clearable
                            v-model="computedDateFormatted"
                            label="Fecha de Suscripción del Contrato"
                            hint="Formato MM/DD/YYYY"
                            persistent-hint
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            color="#023565"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="contract_susctiption_date"
                          no-title
                          @input="contract_susctiption_date_picker = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-flex>
                    <v-flex class="pl-3">
                      <v-select
                        label="Naturaleza del Contrato "
                        prepend-icon="mdi-alpha-n-circle"
                        :items="contract_nature"
                        required
                        color="#023565"
                      ></v-select>
                    </v-flex>
                  </v-layout>
                  <v-text-field
                    label="Objeto del Contrato"
                    prepend-icon="mdi-alpha-o-circle"
                    required
                    color="#023565"
                  ></v-text-field>
                  <v-autocomplete
                    auto-select-first
                    prepend-icon="mdi-office-building-outline"
                    clearable
                    color="#023565"
                    :items="dependence"
                    label="Dependecia Solicitante"
                  ></v-autocomplete>
                  <v-autocomplete
                    auto-select-first
                    prepend-icon="mdi-account-tie"
                    clearable
                    color="#023565"
                    :items="responsable"
                    label="Responsable"
                  ></v-autocomplete>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Valor sin IVA"
                        prepend-icon="mdi-cash"
                        required
                        color="#023565"
                      ></v-text-field>
                    </v-flex>
                    <v-flex class="pl-3">
                      <v-text-field
                        label="IVA"
                        prepend-icon="mdi-cash-plus"
                        required
                        color="#023565"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-text-field
                    label="Valor Inicial del Contrato"
                    prepend-icon="mdi-cash-multiple"
                    required
                    readonly
                    color="#023565"
                  ></v-text-field>
                  <v-layout>
                    <v-flex>
                      <v-textarea
                        name="obs"
                        label="Observaciones"
                        :value="value_obs"
                      ></v-textarea>
                    </v-flex>
                    <v-flex class="pl-3">
                      <v-textarea
                        name="notes"
                        label="Aclaraciones o Notas"
                        :value="value_notes"
                      ></v-textarea>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-tab-item>
        <v-tab>Contratante</v-tab>
        <v-tab-item>
          <v-card-text>
            <v-layout
              class="overflow-y-auto pa-5 ma-0 ba-0"
              justify-center
              fill-height
              style="height: 472px"
              id="container-form"
            >
              <v-flex>
                <v-form @submit.prevent="add">
                  <v-flex class="mb-5 text-right">
                    <small>Datos del Ordenador del Gasto( o Delegado)</small>
                    <v-divider> </v-divider>
                  </v-flex>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Número de Documento del Ordenador del Gasto"
                        prepend-icon="mdi-card-account-details"
                        required
                        hint="O del Delegado"
                        color="#023565"
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Tipo de Documento del Ordenador del Gasto"
                        prepend-icon="mdi-card-bulleted-outline"
                        required
                        hint="O del Delegado"
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Nombre del Ordenador del Gasto"
                        prepend-icon="mdi-account"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Naturaleza del Ordenador del Gasto"
                        prepend-icon="mdi-account-settings"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Cargo del Ordenador del Gasto"
                        prepend-icon="mdi-account-tie"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Dígito Verificación NIT - RUT"
                        prepend-icon="mdi-ticket-confirmation"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-text-field
                    label="RUT Ordenador del Gasto"
                    prepend-icon="mdi-id-card"
                    required
                    color="#023565"
                    readonly
                  ></v-text-field>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Empresa Ordenadora del Gasto"
                        prepend-icon="mdi-office-building"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="NIT Ordenador del Gasto"
                        prepend-icon="mdi-id-card"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-tab-item>
        <v-tab>Contratista</v-tab>
        <v-tab-item>
          <v-card-text>
            <v-layout
              class="overflow-y-auto pa-5 ma-0 ba-0"
              justify-center
              fill-height
              style="height: 472px"
              id="container-form"
            >
              <v-flex>
                <v-form @submit.prevent="add" class="">
                  <v-flex class="mb-5 text-right">
                    <small>Datos del Contratista</small>
                    <v-divider> </v-divider>
                  </v-flex>
                  <v-layout>
                    <v-flex>
                      <v-autocomplete
                        label="Número de Documento del Contratista"
                        prepend-icon="mdi-card-account-details"
                        required
                        color="#023565"
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Tipo de Documento del Ordenador del Contratista"
                        prepend-icon="mdi-card-bulleted-outline"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Nombre del Contratista"
                        prepend-icon="mdi-account"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Naturaleza del Contratista"
                        prepend-icon="mdi-account-settings-outline"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Cargo del Contratista"
                        prepend-icon="mdi-account-tie-outline"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Dígito Verificación NIT - RUT"
                        prepend-icon="mdi-ticket-confirmation"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-text-field
                    label="RUT Contratista"
                    prepend-icon="mdi-id-card"
                    required
                    color="#023565"
                    readonly
                  ></v-text-field>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Empresa Contratista"
                        prepend-icon="mdi-office-building-outline"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="NIT Contratista"
                        prepend-icon="mdi-id-card"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Compañía Aseguradora"
                        prepend-icon="mdi-domain"
                        required
                        color="#023565"
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Número de Poliza de Seguro"
                        prepend-icon="mdi-ticket-confirmation-outline"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-tab-item>
        <v-tab>Procedencia Recursos</v-tab>
        <v-tab-item>
          <v-card-text>
            <v-layout
              class="overflow-y-auto pa-5 ma-0 ba-0"
              justify-center
              fill-height
              style="height: 472px"
              id="container-form"
            >
              <v-flex>
                <v-form @submit.prevent="add" class=""> </v-form>
                <v-flex class="mb-5 text-right">
                  <small>Convenios</small>
                  <v-divider> </v-divider>
                </v-flex>
                <v-label class="indigo--text"
                  >¿Los Recursos Provienen de un Contrato o Convenio
                  Iteradtivo?</v-label
                >
                <v-layout justify-end>
                  <v-flex xs3 class="mr-5 text-right">
                    <v-radio-group row>
                      <v-radio
                        label="SI"
                        color="success"
                        value="success"
                      ></v-radio>
                      <v-radio label="NO" color="red" value="red"></v-radio>
                    </v-radio-group>
                  </v-flex>
                </v-layout>
                <v-autocomplete
                  label="Entidad"
                  prepend-icon="mdi-office-building"
                  required
                  hint="O del Delegado"
                  color="#023565"
                ></v-autocomplete>
                <v-layout>
                  <v-flex>
                    <v-text-field
                      label="Dígito Verificación NIT"
                      prepend-icon="mdi-ticket-confirmation"
                      required
                      color="#023565"
                      readonly
                    ></v-text-field>
                  </v-flex>
                  <v-flex>
                    <v-text-field
                      label="NIT"
                      prepend-icon="mdi-id-card"
                      required
                      color="#023565"
                      readonly
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-tab-item>
        <v-tab>Seguimiento</v-tab>
        <v-tab-item>
          <v-card-text>
            <v-layout
              class="overflow-y-auto pa-5 ma-0 ba-0"
              justify-center
              fill-height
              style="height: 472px"
              id="container-form"
            >
              <v-flex>
                <v-form @submit.prevent="add" class="">
                  <v-flex class="mb-5 text-right">
                    <small>Tipo de Seguimiento</small>
                    <v-divider> </v-divider>
                  </v-flex>
                  <v-label>Seleccione el Tipo de Seguimiento:</v-label>
                  <v-layout>
                    <v-flex>
                      <v-checkbox
                        v-model="supervisor"
                        label="Supervisor"
                        color="primary"
                        value="supervisor"
                        hide-details
                      ></v-checkbox>
                    </v-flex>

                    <v-flex>
                      <v-checkbox
                        v-model="interventor"
                        label="Interventor"
                        color="orange"
                        value="interventor"
                        hide-details
                      ></v-checkbox>
                    </v-flex>
                  </v-layout>
                  <!-- poner vif -->

                  <v-layout>
                    <v-flex class="mb-5 text-right primary--text">
                      <small>Datos del Interventor</small>
                      <v-divider> </v-divider>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>
                      <v-autocomplete
                        auto-select-first
                        clearable
                        prepend-icon="mdi-card-account-details"
                        color="#023565"
                        label="Número de Documento del Interventor"
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex class="ml-2">
                      <v-text-field
                        label="Tipo de Documento del Interventor"
                        prepend-icon="mdi-card-bulleted-outline"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Nombre del Interventor"
                        prepend-icon="mdi-account"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Naturalezadel Interventor"
                        prepend-icon="mdi-account-settings-outline"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Cargodel Interventor"
                        prepend-icon="mdi-account-tie-outline"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Dígito Verificación NIT - RUT"
                        prepend-icon="mdi-ticket-confirmation"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-text-field
                    label="RUT del Interventor"
                    prepend-icon="mdi-id-card"
                    required
                    color="#023565"
                    readonly
                  ></v-text-field>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Empresa Interventora"
                        prepend-icon="mdi-office-building-outline"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="NIT del Interventor"
                        prepend-icon="mdi-id-card"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex class="mb-5 text-right orange--text">
                      <small>Datos del Supervisor</small>
                      <v-divider> </v-divider>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>
                      <v-autocomplete
                        auto-select-first
                        clearable
                        prepend-icon="mdi-card-account-details"
                        color="#023565"
                        label="Número de Documento del Supervisor"
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex class="ml-2">
                      <v-text-field
                        label="Tipo de Documento del Supervisor"
                        prepend-icon="mdi-card-bulleted-outline"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Nombre del Supervisor"
                        prepend-icon="mdi-account"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Naturaleza del Supervisor"
                        prepend-icon="mdi-account-settings-outline"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Cargo del Supervisor"
                        prepend-icon="mdi-account-tie-outline"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Dígito Verificación NIT - RUT"
                        prepend-icon="mdi-ticket-confirmation"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-text-field
                    label="RUT del Supervisor"
                    prepend-icon="mdi-id-card"
                    required
                    color="#023565"
                    readonly
                  ></v-text-field>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Empresa Supervisora"
                        prepend-icon="mdi-office-building-outline"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="NIT del Supervisor"
                        prepend-icon="mdi-id-card"
                        required
                        color="#023565"
                        readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-tab-item>
        <v-tab>Pagos</v-tab>
        <v-tab-item>
          <v-card-text>
            <v-layout
              class="overflow-y-auto pa-5 ma-0 ba-0"
              justify-center
              fill-height
              style="height: 472px"
              id="container-form"
            >
              <v-flex>
                <v-form @submit.prevent="add" class="">
                  <v-flex class="mb-5 text-right">
                    <small>Descripción de Pagos</small>
                    <v-divider> </v-divider>
                  </v-flex>

                  <v-layout>
                    <v-flex>
                      <v-menu
                        v-model="contract_susctiption_date_picker"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            clearable
                            v-model="computedDateFormatted"
                            label="Fecha de Inicio del Contrato"
                            hint="Formato MM/DD/YYYY"
                            persistent-hint
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            color="#023565"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="contract_susctiption_date"
                          no-title
                          @input="contract_susctiption_date_picker = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-flex>
                    <v-flex class="pl-3">
                      <v-menu
                        v-model="contract_susctiption_date_picker"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            clearable
                            v-model="computedDateFormatted"
                            label="Fecha de Finalización del Contrato"
                            hint="Formato MM/DD/YYYY"
                            persistent-hint
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            color="#023565"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="contract_susctiption_date"
                          no-title
                          @input="contract_susctiption_date_picker = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Plazo del Contrato"
                        prepend-icon="mdi-calendar-blank"
                        required
                        persistent-hint
                        hint="Total en Días"
                        color="#023565"
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-select
                        label="Número de Pagos"
                        prepend-icon="mdi-alpha-n-circle"
                        required
                        color="#023565"
                        :items="returnPayNumber"
                      >
                      </v-select>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>
                      <v-select
                        label="Pago Anticipado"
                        prepend-icon="mdi-alpha-a-circle"
                        required
                        color="#023565"
                        :items="ant_pay"
                      ></v-select>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Porcentaje del Anticipo"
                        prepend-icon="mdi-percent"
                        required
                        color="#023565"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-text-field
                    label="Valor Total del Anticipo"
                    prepend-icon="mdi-alpha-v-circle-outline"
                    required
                    readonly
                    color="#023565"
                  ></v-text-field>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Pagos Acumulados"
                        prepend-icon="mdi-alpha-p-circle-outline"
                        required
                        readonly
                        color="#023565"
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Saldo"
                        prepend-icon="mdi-alpha-s-circle-outline"
                        required
                        readonly
                        color="#023565"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-tab-item>
        <v-tab>Porcentajes</v-tab>
        <v-tab-item>
          <v-card-text>
            <v-layout
              class="overflow-y-auto pa-5 ma-0 ba-0"
              justify-center
              fill-height
              style="height: 472px"
              id="container-form"
            >
              <v-flex>
                <v-form @submit.prevent="add" class="">
                  <v-flex class="mb-5 text-right">
                    <small>Descripción de Porcentajes</small>
                    <v-divider> </v-divider>
                  </v-flex>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Porcentaje Avance Físico Programado"
                        prepend-icon="mdi-percent-outline"
                        required
                        color="#023565"
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Porcentaje Avance Físico Real"
                        prepend-icon="mdi-percent"
                        required
                        color="#023565"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>
                      <v-text-field
                        label="Porcentaje Avance Presupuestal Programado"
                        prepend-icon="mdi-percent-outline"
                        required
                        color="#023565"
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        label="Porcentaje Avance Físico Real"
                        prepend-icon="mdi-percent"
                        required
                        color="#023565"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-flex class="mb-2 mt-2">
                    <small>Progreso Trimestral</small>
                    <v-progress-linear
                      class="mt-3"
                      color="green"
                      value="30"
                    ></v-progress-linear>
                  </v-flex>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-tab-item>
        <v-tab>Liquidación</v-tab>
        <v-tab-item>
          <v-card-text>
            <v-layout
              class="overflow-y-auto pa-5 ma-0 ba-0"
              justify-center
              fill-height
              style="height: 472px"
              id="container-form"
            >
              <v-flex>
                <v-form @submit.prevent="add" class="">
                  <v-flex class="mb-5 text-right">
                    <small>Culminación Contrato</small>
                    <v-divider> </v-divider>
                    <v-layout>
                      <v-flex>
                        <v-text-field
                          label="Número de Acta Final Liquidación"
                          prepend-icon="mdi-alpha-n-circle"
                          required
                          color="#023565"
                        ></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-menu
                          v-model="contract_susctiption_date_picker"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              clearable
                              v-model="computedDateFormatted"
                              label="Fecha de Acta Final Liquidación"
                              hint="Formato MM/DD/YYYY"
                              persistent-hint
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              color="#023565"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="contract_susctiption_date"
                            no-title
                            @input="contract_susctiption_date_picker = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex>
                        <v-text-field
                          label="Número de Certificación del Pago"
                          prepend-icon="mdi-alpha-n-circle-outline"
                          required
                          color="#023565"
                        ></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-menu
                          v-model="contract_susctiption_date_picker"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              clearable
                              v-model="computedDateFormatted"
                              label="Fecha de Certificación del Pago"
                              hint="Formato MM/DD/YYYY"
                              persistent-hint
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              color="#023565"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="contract_susctiption_date"
                            no-title
                            @input="contract_susctiption_date_picker = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-tab-item>
      </v-tabs>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-flex class="text-right pt-5 pr-5">
          <v-btn color="red darken-1" text @click="closeDialogForm()">
            Cancelar
          </v-btn>
          <v-btn color="success darken-1" text @click="closeDialogForm()">
            Agregar
          </v-btn>
        </v-flex>
      </v-card-actions>
    </v-card>
  </v-container>
</template>


<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Contract",
  data() {
    return {
      ant_pay: [
        {
          id: "pacted",
          text: "Pactado",
        },
        {
          id: "no_pacted",
          text: "No Pactado",
        },
      ],
      number_pay: [],
      value_obs: "",
      value_notes: "",
      contract_susctiption_date: null,
      contract_susctiption_date_picker: false,
      interventor: null,
      supervisor: null,
      responsable: [],
      dependence: [
        {
          id: "fiet",
          text: "FIET - Facultad de Ingeniería Electrónica y Telecomunicaciones",
        },
        {
          id: "fic",
          text: "FIC - Facultad de Ingeniería Civil",
        },
        {
          id: "facned",
          text: "FACENED - Facultad de Ciencias Exactas, Naturales y de la Educación",
        },
        {
          id: "facar",
          text: "FACAR - Facultad de Artes",
        },
        {
          id: "faca",
          text: "FACA - Facultad de Ciencias Agrarias",
        },
      ],
      contract_type: [
        {
          id: "arrendamiendo",
          text: "Arrendamiento",
          code: "5.5-31.1",
        },
        {
          id: "compraventa",
          text: "Compraventa",
          code: "5.5-31.3",
        },
        {
          id: "obras",
          text: "Obras",
          code: "5.5-31.4",
        },
        {
          id: "prestacion_servicios",
          text: "Prestación de Servicios",
          code: "5.5-31.5",
        },
        {
          id: "suministro",
          text: "Suministro",
          code: "5.5-31.6",
        },
        {
          id: "aprendizaje",
          text: "Aprendizaje",
          code: "5.5-31.7",
        },
        {
          id: "comodato",
          text: "Comodato",
          code: "5.5-31.8",
        },
        {
          id: "consultoria",
          text: "Consultoría",
          code: "5.5-31.9",
        },
        {
          id: "monodato",
          text: "Monodato",
          code: "5.5-31.10",
        },
        {
          id: "transporte",
          text: "Transporte",
          code: "5.5-31.11",
        },
      ],
      contract_nature: [
        {
          id: "i",
          text: "Inversion",
        },
        {
          id: "spi",
          text: "Servicios Personales Indirectos",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["closeDialogForm"]),
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    payNumber(n) {
      for (var i = 1; i <= n; i++) {
        var dc = {};
        dc["id"] = String(i) + "_pay";
        dc["text"] = String(i);
        this.number_pay.push(dc);
      }
    },
  },
  computed: {
    returnPayNumber() {
      this.payNumber(12);
      return this.number_pay;
    },
    // ...mapState(['dialog_form'])
    computedDateFormatted() {
      return this.formatDate(this.contract_susctiption_date);
    },
  },
};
</script>

<style>
#container-form::-webkit-scrollbar {
  width: 0em;
  background: grey;
  display: inline !important;
}
</style>