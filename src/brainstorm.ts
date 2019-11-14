/*
ba: base de atendimento
cm: condição meteorológica
ds: dia da semana
pd: período do dia
*/
export const f = (ba: number, cm: number, ds: number, pd: number) => {
  const ids = [
    [ba, 0, 0, 0],
    [ba, cm, 0, 0],
    [ba, ds, 0, 0],
    [ba, pd, 0, 0],
    [ba, cm, ds, 0],
    [ba, cm, pd, 0],
    [ba, cm, ds, pd],
    [0, cm, 0, 0],
    [0, cm, ds, 0],
    [0, cm, pd, 0],
    [0, cm, ds, pd],
    [0, 0, ds, 0],
    [0, 0, ds, pd],
    [0, 0, 0, pd]
  ];
  return ids.map(id => id.join("_"));
};

const c = f(1, 2, 3, 4);

/**
 * [
 *  "1_0_0_4"
    "1_0_0_0",
    "1_0_0_4"
    "1_0_3_4"
    "1_2_3_4"
    "1_2_0_0",
    "1_3_0_0",
    "1_4_0_0",
    "1_2_3_0",
    "1_2_4_0",
    "1_2_3_4",
    "0_2_0_0",
    "0_2_3_0",
    "0_2_4_0",
    "0_2_3_4",
    "0_0_3_0",
    "0_0_3_4",
    "0_0_0_4"
]
 */

/*
ba
1 Imigrates KM5
2 Imigrates KM10
3 Dutra KM54
4 Dutra KM80
5 Via Anchieta KM120

cm
1 Pista Seca
2 Chuva Fraca
3 Chuva Forte
4 Nublado Nível 1
5 Nublado Nível 2

ds
1 Segunda
2 Terça
3 Quarta
4 Quinta
5 Sexta
6 Sábado
7 Domingo

pd
1 Manhã
2 Tarde
3 Noite
*/
