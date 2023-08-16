import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SuperAdminService {
    superAdminData: any = [

        {
            "index": 0,
            "collapse": false,
            "collapseImg": "../../../../assets/icons/rightsideArrow.svg",
            "collapseImgDown": "../../../../assets/icons/downsideArrow.svg",
            "menu": "Accounts",
            "role": ["coach", "admin"],
            "img_url": "../../../../assets/icons/sidebarIconBuilding.svg",
            "submenu": [

                {
                    "menu": "Account List ",
                    "url": "/admin/account/list",
                    "role": ["coach", "admin"],
                    "id": "#Account List ",
                    "submenu": {}
                },
                {
                    "menu": "Settings",
                    "collapse": false,
                    "collapseImg": "../../../../assets/icons/rightsideArrow.svg",
                    "collapseImgDown": "../../../../assets/icons/downsideArrow.svg",
                    "role": ["coach", "admin"],
                    "id": "#Settings",
                    "submenu": [
                        {
                            "menu": "Company Structure",
                            "url": "/admin/location/list",
                            "role": ["coach", "admin"],
                            "id": "#Company Structure ",
                            "submenu": {}
                        },
                        {
                            "menu": "Payment Methods",
                            "role": ["coach", "admin"],
                            "id": "#Payment Methods",
                            "submenu": {}
                        },
                        {
                            "menu": "Integrations",
                            "role": ["coach", "admin"],
                            "id": "#Integrations",
                            "submenu": {}
                        }, {
                            "menu": "Invoicing",
                            "role": ["coach", "admin"],
                            "id": "#Invoicing",
                            "submenu": {}
                        }, {
                            "menu": "Branding",
                            "role": ["coach", "admin"],
                            "id": "#Branding",
                            "submenu": {}
                        },

                    ]
                },


            ]
        },

        {
            "index": 1,
            "collapse": false,
            "collapseImg": "../../../../assets/icons/rightsideArrow.svg",
            "collapseImgDown": "../../../../assets/icons/downsideArrow.svg",
            "menu": "Coaches",
            "role": ["coach", "admin"],
            "img_url": "../../../../assets/icons/sidebarIconUserVoice.svg",
            "submenu": [

                {
                    "menu": "Manage Coach",
                    "url": "/admin/coach/list",
                    "role": ["coach", "admin"],
                    "id": "#Manage Coach",
                    "submenu": {}
                },
                {
                    "menu": "Manage Coach Review",
                    "url": "/admin/coach-review/list",
                    "role": ["coach", "admin"],
                    "id": "#Manage Coach Review",
                    "submenu": {}
                },
                {
                    "menu": "Coach Availablity",
                    "url": "/admin/coach-availablity/list",
                    "role": ["coach", "admin"],
                    "id": "#Coach Availablity",
                    "submenu": {}
                },

            ]
        },

        {
            "index": 2,
            "collapse": false,
            "collapseImg": "../../../../assets/icons/rightsideArrow.svg",
            "collapseImgDown": "../../../../assets/icons/downsideArrow.svg",
            "menu": "Notifications",
            "role": ["coach", "admin"],
            "img_url": "../../../../assets/icons/sidebarIconNotification.svg",
            "submenu": [

                {
                    "menu": "What's New ",
                    "url": "/admin/notifications/list",
                    "role": ["coach", "admin"],
                    "id": "#WhatNew",
                    "submenu": {}
                },

            ]
        },

        {
            "index": 3,
            "collapse": false,
            "collapseImg": "../../../../assets/icons/rightsideArrow.svg",
            "collapseImgDown": "../../../../assets/icons/downsideArrow.svg",
            "menu": "Action Plan Libraries",
            "role": ["coach", "admin"],
            "img_url": "../../../../assets/icons/sidebarIconUserRun.svg",
            "submenu": [
                {
                    "menu": "Movements",
                    "collapse": false,
                    "collapseImg": "../../../../assets/icons/rightsideArrow.svg",
                    "collapseImgDown": "../../../../assets/icons/downsideArrow.svg",
                    "role": ["coach", "admin"],
                    "id": "#Movements",
                    "submenu": [
                        {
                            "menu": "Exercise",
                            "url": "/admin/exercise/list",
                            "role": ["coach", "admin"],
                            "id": "#Exercise",
                            "submenu": {}
                        },
                        {
                            "menu": "Training Blocks",
                            "url": "/admin/trainingblock/list",
                            "role": ["coach", "admin"],
                            "id": "#Training Blocks",
                            "submenu": {}
                        },
                        {
                            "menu": "Workouts",
                            "url": "/admin/workout/list",
                            "role": ["coach", "admin"],
                            "id": "#Workouts",
                            "submenu": {}
                        },
                        {
                            "menu": "Programs",
                            "url": "/admin/program/list",
                            "role": ["coach", "admin"],
                            "id": "#Program",
                            "submenu": {}
                        },
                    ]
                },
                {
                    "menu": "Nutrition",
                    "collapse": false,
                    "collapseImg": "../../../../assets/icons/rightsideArrow.svg",
                    "collapseImgDown": "../../../../assets/icons/downsideArrow.svg",
                    "role": ["coach", "admin"],
                    "id": "#Nutrition",
                    "submenu": [
                        {
                            "menu": "Recipes",
                            "url": "/admin/recipes/list",
                            "role": ["coach", "admin"],
                            "id": "#Recipes",
                            "submenu": {}
                        },
                    ]
                },
                {
                    "menu": "Regeneration",
                    "collapse": false,
                    "collapseImg": "../../../../assets/icons/rightsideArrow.svg",
                    "collapseImgDown": "../../../../assets/icons/downsideArrow.svg",
                    "role": ["coach", "admin"],
                    "id": "#Regeneration",
                    "submenu": [
                        {
                            "menu": "Meditation",
                            "collapse": false,
                            "collapseImg": "../../../../assets/icons/rightsideArrow.svg",
                            "collapseImgDown": "../../../../assets/icons/downsideArrow.svg",
                            "role": ["coach", "admin"],
                            "id": "#Meditation",
                            "submenu": [
                                {
                                    "menu": "Meditation Exercise",
                                    "url": "meditation/list",
                                    "role": ["coach", "admin"],
                                    "id": "#Meditation_Exercise",
                                    "submenu": {}
                                },
                                {
                                    "menu": "Meditation Program",
                                    "url": "meditationProgram/list",
                                    "role": ["coach", "admin"],
                                    "id": "#Medition_Program",
                                    "submenu": {}
                                },
                            ]
                        },
                        {
                            "menu": "Breathwork",
                            "collapse": false,
                            "collapseImg": "../../../../assets/icons/rightsideArrow.svg",
                            "collapseImgDown": "../../../../assets/icons/downsideArrow.svg",
                            "role": ["coach", "admin"],
                            "id": "#Breathwork",
                            "submenu": [
                                {
                                    "menu": "Breathwork Exercise",
                                    "url": "breathwork/list",
                                    "role": ["coach", "admin"],
                                    "id": "#Breathwork_Exercise",
                                    "submenu": {}
                                },
                                {
                                    "menu": "Breathwork Program",
                                    "url": "breathworkProgram/list",
                                    "role": ["coach", "admin"],
                                    "id": "#Breathwork_Program",
                                    "submenu": {}
                                },
                            ]
                        },
                    ]
                },
                {
                    "menu": "Tips",
                    "url": "tips/list",
                    "role": ["coach", "admin"],
                    "id": "#Tips",
                    "submenu": {}
                },
                {
                    "menu": "Questions",
                    "url": "/admin/questions/list",
                    "role": ["coach", "admin"],
                    "id": "#Questions",
                    "submenu": {}
                },
                {
                    "menu": "Encounters",
                    "url": "/admin/encounters/list",
                    "role": ["coach", "admin"],
                    "id": "#Encounters",
                    "submenu": {}
                },
            ]
        },
        {
            "index": 4,
            "collapse": false,
            "collapseImg": "../../../../assets/icons/rightsideArrow.svg",
            "collapseImgDown": "../../../../assets/icons/downsideArrow.svg",
            "menu": "System Configuration",
            "role": ["coach", "admin"],
            "img_url": "../../../../assets/icons/sidebarIconRoundHexagon.svg",
            "submenu": [

                {
                    "menu": "Goals",
                    "url": "/admin/goals/list",
                    "role": ["coach", "admin"],
                    "id": "#Goals",
                    "submenu": {}
                },
                {
                    "menu": "Content Blocks",
                    "url": "/admin/content-block/list",
                    "role": ["coach", "admin"],
                    "id": "#Content Blocks",
                    "submenu": {}
                },
                {
                    "menu": "Weight Modifiers",
                    "url": "/admin/weight-modifier/list",
                    "role": ["coach", "admin"],
                    "id": "#Weight Modifiers",
                    "submenu": {}
                },
                {
                    "menu": "Background Music",
                    "url": "/admin/backgroundMusic/list",
                    "role": ["coach", "admin"],
                    "id": "#Background Music",
                    "submenu": {}
                },
                {
                    "menu": "Narrator",
                    "url": "/admin/narrator/list",
                    "role": ["coach", "admin"],
                    "id": "#Narrator",
                    "submenu": {}
                },
                {
                    "menu": "Training For",
                    "url": "/admin/training/list",
                    "role": ["coach", "admin"],
                    "id": "#Training For",
                    "submenu": {}
                }, {
                    "menu": "Strength & Resistance Training Style",
                    "url": "/admin/strengthResistanceTraining/list",
                    "role": ["coach", "admin"],
                    "id": "#Strength Resistance Training Style",
                    "submenu": {}
                },

                {
                    "menu": "Gym Access",
                    "url": "/admin/gymAccess/list",
                    "role": ["coach", "admin"],
                    "id": "#Gym Access",
                    "submenu": {}
                },

                {
                    "menu": "Equipment Categories",
                    "url": "/admin/equipmentCategories/list",
                    "role": ["coach", "admin"],
                    "id": "#Equipment Categories",
                    "submenu": {}
                },

                {
                    "menu": "Equipments",
                    "url": "/admin/equipments/list",
                    "role": ["coach", "admin"],
                    "id": "#Equipments",
                    "submenu": {}
                },
                {
                    "menu": "Test Panel",
                    "url": "/admin/testPanel/list",
                    "role": ["coach", "admin"],
                    "id": "#Test Panel",
                    "submenu": {}
                },
                {
                    "menu": "Transitions",
                    "url": "/admin/transitions/list",
                    "role": ["coach", "admin"],
                    "id": "#Transitions",
                    "submenu": {}
                },

            ]
        },





        {
            "index": 5,
            "collapse": false,
            "collapseImg": "../../../../assets/icons/rightsideArrow.svg",
            "collapseImgDown": "../../../../assets/icons/downsideArrow.svg",
            "menu": "Customer",
            "role": ["coach", "admin"],
            "img_url": "../../../../assets/icons/sidebarIconUser.svg",
            "submenu": [

                {
                    "menu": "Manage Customer",
                    "url": "/admin/customer/list",
                    "role": ["coach", "admin"],
                    "id": "#Manage Customer",
                    "submenu": {}
                },

            ]
        },

        {
            "index": 6,
            "collapse": false,
            "collapseImg": "../../../../assets/icons/rightsideArrow.svg",
            "collapseImgDown": "../../../../assets/icons/downsideArrow.svg",
            "menu": "Health Data",
            "role": ["coach", "admin"],
            "img_url": "../../../../assets/icons/sidebarIconCalender.svg",
            "submenu": [
                {
                    "menu": "Categories",
                    "collapse": false,
                    "collapseImg": "../../../../assets/icons/rightsideArrow.svg",
                    "collapseImgDown": "../../../../assets/icons/downsideArrow.svg",
                    "role": ["coach", "admin"],
                    "id": "#Categories",
                    "submenu": [
                        {
                            "menu": "Symptom Category",
                            "url": "healthdata/categories/symptom/list",
                            "role": ["coach", "admin"],
                            "id": "#Symptom Category",
                            "submenu": {}
                        },
                        {
                            "menu": "Main Category",
                            "url": "healthdata/categories/maincategory/list",
                            "role": ["coach", "admin"],
                            "id": "#Main Category",
                            "submenu": {}
                        },
                        {
                            "menu": "Sub Category",
                            "url": "healthdata/categories/subcategory/list",
                            "role": ["coach", "admin"],
                            "id": "#Sub Category",
                            "submenu": {}
                        },

                    ]
                },
                {
                    "menu": "Indication",
                    "collapse": false,
                    "collapseImg": "../../../../assets/icons/rightsideArrow.svg",
                    "collapseImgDown": "../../../../assets/icons/downsideArrow.svg",
                    "role": ["coach", "admin"],
                    "id": "#Indication",
                    "submenu": [
                        {
                            "menu": "Result Option",
                            "url": "healthdata/indication/resultoption/list",
                            "role": ["coach", "admin"],
                            "id": "#Result Option",
                            "submenu": {}
                        },
                    ]
                },
                {
                    "menu": "Data Sources",
                    "url": "healthdata/datasource/list",
                    "role": ["coach", "admin"],
                    "id": "#Data Sources",
                    "submenu": {}
                },
                {
                    "menu": "Data Mapping",
                    "url": "healthdata/datamapping/list",
                    "role": ["coach", "admin"],
                    "id": "#Data Mapping",
                    "submenu": {}
                },
                {
                    "menu": "Data Details",
                    "url": "healthdata/datadetail/list",
                    "role": ["coach", "admin"],
                    "id": "#Data Details",
                    "submenu": {}
                },
                {
                    "menu": "Import Genomics",
                    "url": "healthdata/dataimport/importgenomics",
                    "role": ["coach", "admin"],
                    "id": "#Import Genomics",
                    "submenu": {}
                },
            ]
        },


    ]
    constructor() {

    }
    setCollapse(index: any) {
        if (this.superAdminData[index].submenu.length > 0) {
            for (let i = 0; i < this.superAdminData[index].submenu.length; i++) {
                if (this.superAdminData[index].submenu[i].collapse == true) {
                    this.superAdminData[index].submenu[i].collapse = false;
                } else {
                    this.superAdminData[index].submenu[i].collapse = false;
                }
                for (let j = 0; j < this.superAdminData[index].submenu[i].submenu.length; j++) {
                    if (this.superAdminData[index].submenu[i].submenu[j].collapse == true) {
                        this.superAdminData[index].submenu[i].submenu[j].collapse = false;
                    } else {
                        this.superAdminData[index].submenu[i].submenu[j].collapse = false;
                    }

                }
            }

        }

    }
}
