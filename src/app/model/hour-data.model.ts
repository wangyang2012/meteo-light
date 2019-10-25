export class HourData {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: string;
    DPT2m: string;
    WNDCHILL2m: string;
    HUMIDEX: string;
    RH2m: string;
    PRMSL: string;
    APCPsfc: string;
    WNDSPD10m: string;
    WNDGUST10m: string;
    WNDDIR10m: string;
    WNDDIRCARD10: string;
    ISSNOW: string;
    HCDC: string;
    HGT0C: string;
    KINDEX: string;
    CAPE180_0: string;
    CIN180_0: string;
}

/*
Données horaires
0H00
Icône Fcst_day_0->hourly_data->0H00->ICON
Conditions (texte) *
Fcst_day_0->hourly_data->0H00->CONDITION
Température [°C] Fcst_day_0->hourly_data->0H00->TMP2m
Point de rosée [°C] Fcst_day_0->hourly_data->0H00->DPT2m
Refroidissement éolien [°C] Fcst_day_0->hourly_data->0H00->WNDCHILL2m
Humidité relative [%]
Fcst_day_0->hourly_data->0H00->RH2m
Pression atmosphérique [Hpa]
Fcst_day_0->hourly_data->0H00->PRMSL
Précipitations [mm]
Fcst_day_0->hourly_data->0H00->APCPsfc
Vitesse du vent à 10m [Km/h]
Fcst_day_0->hourly_data->0H00->WNDSPD10m
Rafales à 10m [Km/h] Fcst_day_0->hourly_data->0H00->WNDGUST10m
Direction du vent [°] Fcst_day_0->hourly_data->0H00->WNDDIR10m
Direction du vent Fcst_day_0->hourly_data->0H00->WNDDIRCARD10
Type de précipitation [0 = pluie,
1 = neige]
Fcst_day_0->hourly_data->0H00->ISSNOW
Nuages haute altitude Fcst_day_0->hourly_data->0H00->HCDC
Nuages moyenne altitude Fcst_day_0->hourly_data->0H00->MCDC
www.prevision-meteo.ch Données météo pour sites web
Nuages basse altitude Fcst_day_0->hourly_data->0H00->LCDC
Isotherme zéro degré [°C] Fcst_day_0->hourly_data->0H00->HGT0C
K-index (potentiel orageux) Fcst_day_0->hourly_data->0H00->KINDEX
CAPE 180-0
Fcst_day_0->hourly_data->0H00->CAPE180_0
CIN 180-0
Fcst_day_0->hourly_data->0H00->CIN180_0

 */