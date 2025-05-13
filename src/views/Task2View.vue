<template>
  <div>
    <h1 :class="styles.title">Круговая диаграмма</h1>
    <div :class="styles.pieChartSet">
      <div :class="styles.pieChartSet__parametersContainer">
        <div :class="styles.parameters">
          <template
            v-for="(sector, sectorIndex) in sectors"
            :key="sectorIndex"
          >
            <PieChartSector
              :sector
              @edit:click="() => modalEdit?.open(sector, sectorIndex)"
              @delete:click="() => onDeleteSectorHandler(sectorIndex)"
            />
          </template>
        </div>
        <ButtonText
          title="Добавить сектор"
          :class="styles.parameters__submitButton"
          @click="() => modalAdd?.open()"
        />
      </div>
      <div :class="styles.pieChartSet__chartWrapper">
        <Pie
          :data
          :options
        />
      </div>
    </div>
  </div>
  <PieChartSectorModalEdit
    ref="modalEdit"
    @submit="onSectorModalEditSubmit"
  />
  <PieChartSectorModalAdd
    ref="modalAdd"
    @submit="onSectorModalAddSubmit"
  />
</template>

<script setup lang="ts">
import { Pie } from 'vue-chartjs';
import { computed, ref, useCssModule } from 'vue';
import { ArcElement, Legend, Tooltip, Chart, type ChartOptions } from 'chart.js';
import ButtonText from '@/components/buttons/ButtonText.vue';
import type { Sector } from '@/components/charts/utils/models';
import PieChartSector from '@/components/charts/PieChartSector.vue';
import PieChartSectorModalAdd from '@/components/modals/PieChartSectorModalAdd.vue';
import PieChartSectorModalEdit from '@/components/modals/PieChartSectorModalEdit.vue';

Chart.register(ArcElement, Tooltip, Legend);

const styles = useCssModule();
const modalEdit = ref<InstanceType<typeof PieChartSectorModalEdit>>();
const modalAdd = ref<InstanceType<typeof PieChartSectorModalAdd>>();
const data = computed(() => ({
  labels: sectors.value.map((sector) => sector.name),
  datasets: [
    {
      backgroundColor: sectors.value.map((sector) => sector.color),
      data: sectors.value.map((sector) => sector.percent),
    },
  ],
}));

const sectors = ref<Sector[]>([
  { name: 'Сектор-1', percent: 25, color: '#FF6384' },
  { name: 'Сектор-2', percent: 40, color: '#FFCD56' },
  { name: 'Сектор-3', percent: 35, color: '#4BC0C0' },
]);

const options: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: false,
  layout: { autoPadding: true },
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        padding: 10,
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
  },
};

const onDeleteSectorHandler = (sectorIndex: number) => {
  sectors.value = [...sectors.value.slice(0, sectorIndex), ...sectors.value.slice(sectorIndex + 1)];
};

const onSectorModalEditSubmit = (sector: Sector, sectorIndex: number) => {
  sectors.value = [
    ...sectors.value.slice(0, sectorIndex),
    sector,
    ...sectors.value.slice(sectorIndex + 1),
  ];
};

const onSectorModalAddSubmit = (sector: Sector) => {
  sectors.value = [...sectors.value, sector];
};
</script>

<style module>
.title {
  padding: 0px 10px 30px 10px;
  border-bottom: 1px solid #dbdfe9;
  margin: 30px 0 40px 0;
  color: #252f4a;
  font-weight: 600;
}

.pieChartSet {
  display: flex;
  gap: 89px;
}

.pieChartSet__parametersContainer {
  flex-grow: 1;
}

.pieChartSet__chartWrapper {
  width: 500px;
  height: 500px;
  margin-right: 40px;
}

.parameters {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.parameters__submitButton {
  margin-top: 30px;
}
</style>
