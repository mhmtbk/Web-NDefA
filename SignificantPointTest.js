//---Significant Point Analaysis
$("#DeformationTest_t2t1").click(function () {
    Noktalar_t1_sgnf = Noktalar_t1;
    Noktalar_t2_sgnf = Noktalar_t2;
    for (let i = static_point_count_t1t2 - 1; i >= 0; i--) {
        Noktalar_t1_sgnf.splice(static_points_name_index_t2t1_t1[i], 1);
        Noktalar_t2_sgnf.splice(static_points_name_index_t2t1_t2[i], 1);
    };
    //

    //
    matrix1tumCoor_t1_sgnf = math.zeros((NoktaSayisi_t1 - static_point_count_t1t2) * 3, 1)
    for (let i = 0; i < (NoktaSayisi_t2 - static_point_count_t1t2); i++) {
        var xt1_sgnf = matrix1tumCoor_t1.subset(math.index(3 * (bazNNunique_t1.indexOf(Noktalar_t1_sgnf[i])), 0));
        var yt1_sgnf = matrix1tumCoor_t1.subset(math.index(3 * (bazNNunique_t1.indexOf(Noktalar_t1_sgnf[i])) + 1, 0));
        var zt1_sgnf = matrix1tumCoor_t1.subset(math.index(3 * (bazNNunique_t1.indexOf(Noktalar_t1_sgnf[i])) + 2, 0));

        matrix1tumCoor_t1_sgnf.subset(math.index((3 * i), 0), xt1_sgnf);
        matrix1tumCoor_t1_sgnf.subset(math.index(((3 * i) + 1), 0), yt1_sgnf);
        matrix1tumCoor_t1_sgnf.subset(math.index(((3 * i) + 2), 0), zt1_sgnf);
    }

    matrix1tumCoor_t2_sgnf = math.zeros((NoktaSayisi_t2 - static_point_count_t1t2) * 3, 1)
    for (let i = 0; i < (NoktaSayisi_t2 - static_point_count_t1t2); i++) {
        var xt2_sgnf = matrix1tumCoor_t2.subset(math.index(3 * (bazNNunique_t2.indexOf(Noktalar_t2_sgnf[i])), 0));
        var yt2_sgnf = matrix1tumCoor_t2.subset(math.index(3 * (bazNNunique_t2.indexOf(Noktalar_t2_sgnf[i])) + 1, 0));
        var zt2_sgnf = matrix1tumCoor_t2.subset(math.index(3 * (bazNNunique_t2.indexOf(Noktalar_t2_sgnf[i])) + 2, 0));

        matrix1tumCoor_t2_sgnf.subset(math.index((3 * i), 0), xt2_sgnf);
        matrix1tumCoor_t2_sgnf.subset(math.index(((3 * i) + 1), 0), yt2_sgnf);
        matrix1tumCoor_t2_sgnf.subset(math.index(((3 * i) + 2), 0), zt2_sgnf);
    }
    //

    new_point_count_t2t1 = (NoktaSayisi_t2 - static_point_count_t1t2);

    TumIzMtrx1A_t1_sgnf = math.zeros(BazSayisi_t1 * 3, new_point_count_t2t1 * 3)
    for (let i = 0; i < new_point_count_t2t1; i++) {
        for (let j = 0; j < BazSayisi_t1 * 3; j++) {
            var xt1_A_sgnf = TumIzMtrx1A_t1.subset(math.index(j, (3 * (bazNNunique_t1.indexOf(Noktalar_t1_sgnf[i])))));
            var yt1_A_sgnf = TumIzMtrx1A_t1.subset(math.index(j, (3 * (bazNNunique_t1.indexOf(Noktalar_t1_sgnf[i])) + 1)));
            var zt1_A_sgnf = TumIzMtrx1A_t1.subset(math.index(j, (3 * (bazNNunique_t1.indexOf(Noktalar_t1_sgnf[i])) + 2)));

            TumIzMtrx1A_t1_sgnf.subset(math.index(j, (3 * i)), xt1_A_sgnf);
            TumIzMtrx1A_t1_sgnf.subset(math.index(j, (3 * i) + 1), yt1_A_sgnf);
            TumIzMtrx1A_t1_sgnf.subset(math.index(j, (3 * i) + 2), zt1_A_sgnf);
        }
    }

    TumIzMtrx1A_t2_sgnf = math.zeros(BazSayisi_t2 * 3, new_point_count_t2t1 * 3)
    for (let i = 0; i < new_point_count_t2t1; i++) {
        for (let j = 0; j < BazSayisi_t2 * 3; j++) {
            var xt2_A_sgnf = TumIzMtrx1A_t2.subset(math.index(j, (3 * (bazNNunique_t2.indexOf(Noktalar_t2_sgnf[i])))));
            var yt2_A_sgnf = TumIzMtrx1A_t2.subset(math.index(j, (3 * (bazNNunique_t2.indexOf(Noktalar_t2_sgnf[i])) + 1)));
            var zt2_A_sgnf = TumIzMtrx1A_t2.subset(math.index(j, (3 * (bazNNunique_t2.indexOf(Noktalar_t2_sgnf[i])) + 2)));

            TumIzMtrx1A_t2_sgnf.subset(math.index(j, (3 * i)), xt2_A_sgnf);
            TumIzMtrx1A_t2_sgnf.subset(math.index(j, (3 * i) + 1), yt2_A_sgnf);
            TumIzMtrx1A_t2_sgnf.subset(math.index(j, (3 * i) + 2), zt2_A_sgnf);
        }
    }
    //

    mtrx_N_t1_sgnf = math.multiply(math.transpose(TumIzMtrx1A_t1_sgnf), mtrx1P_t1, TumIzMtrx1A_t1_sgnf);
    mtrx_n_t1_sgnf = math.multiply(math.transpose(TumIzMtrx1A_t1_sgnf), mtrx1P_t1, matrix1l_t1);

    mtrx_N_t2_sgnf = math.multiply(math.transpose(TumIzMtrx1A_t2_sgnf), mtrx1P_t2, TumIzMtrx1A_t2_sgnf);
    mtrx_n_t2_sgnf = math.multiply(math.transpose(TumIzMtrx1A_t2_sgnf), mtrx1P_t2, matrix1l_t2);

    mtrx_QX_t1_sgnf = math.inv(mtrx_N_t1_sgnf);
    mtrx_QX_t2_sgnf = math.inv(mtrx_N_t2_sgnf);

    mtrx_x_t1_sgnf = math.multiply(mtrx_QX_t1_sgnf, mtrx_n_t1_sgnf);
    mtrx_x_t2_sgnf = math.multiply(mtrx_QX_t2_sgnf, mtrx_n_t2_sgnf);
    //

    mtrx_Deng_t1_sgnf = math.add(matrix1tumCoor_t1_sgnf, mtrx_x_t1_sgnf);
    mtrx_Deng_t2_sgnf = math.add(matrix1tumCoor_t2_sgnf, mtrx_x_t2_sgnf);
    //

    mtrx_V_t1_sgnf = math.subtract(math.multiply(TumIzMtrx1A_t1_sgnf, mtrx_x_t1_sgnf), matrix1l_t1);
    mtrx_V_t2_sgnf = math.subtract(math.multiply(TumIzMtrx1A_t2_sgnf, mtrx_x_t2_sgnf), matrix1l_t2);

    n_sgnf_t1 = BazSayisi_t1 * 3;
    u_sgnf_t1 = (NoktaSayisi_t1 - static_point_count_t1t2) * 3;
    f_sgnf_t1 = n_sgnf_t1 - u_sgnf_t1;

    n_sgnf_t2 = BazSayisi_t2 * 3;
    u_sgnf_t2 = (NoktaSayisi_t2 - static_point_count_t1t2) * 3;
    f_sgnf_t2 = n_sgnf_t2 - u_sgnf_t2;

    mtrx_S0_t1 = math.sqrt(math.divide((math.multiply(math.transpose(mtrx_V_t1_sgnf), mtrx1P_t1, mtrx_V_t1_sgnf)), f_sgnf_t1))
    mtrx_S0_t1_sgnf = mtrx_S0_t1.get([0, 0]);
    mtrx_S0_t2 = math.sqrt(math.divide((math.multiply(math.transpose(mtrx_V_t2_sgnf), mtrx1P_t2, mtrx_V_t2_sgnf)), f_sgnf_t2))
    mtrx_S0_t2_sgnf = mtrx_S0_t2.get([0, 0]);
    //
    So2_t2t1_sgnf = math.divide(math.add(math.multiply(Math.pow(mtrx_S0_t1_sgnf, 2), f_sgnf_t1), math.multiply(Math.pow(mtrx_S0_t2_sgnf, 2), f_sgnf_t2)), math.add(f_sgnf_t1, f_sgnf_t2));
    //

    //---
    let eslesmis_t2t1_DengCoord = [];
    for (let i = 0; i < new_point_count_t2t1; i++) {
        for (let j = 0; j < new_point_count_t2t1; j++) {
            NNt1 = (Noktalar_t1_sgnf[i]).toLowerCase()
            NNt2 = (Noktalar_t2_sgnf[j]).toLowerCase()
            if (NNt2.includes(NNt1)) {
                eslesmis_t2t1_DengCoord.push(mtrx_Deng_t2_sgnf.subset(math.index((3 * j), 0)));
                eslesmis_t2t1_DengCoord.push(mtrx_Deng_t2_sgnf.subset(math.index((3 * j) + 1, 0)));
                eslesmis_t2t1_DengCoord.push(mtrx_Deng_t2_sgnf.subset(math.index((3 * j) + 2, 0)));
            }
        }
    }

    //
    let eslesmis_t2t1_DengCoord_mtrx = math.zeros(new_point_count_t2t1 * 3, 1);
    for (let i = 0; i < new_point_count_t2t1 * 3; i += 3) {
        eslesmis_t2t1_DengCoord_mtrx.subset(math.index(i, 0), eslesmis_t2t1_DengCoord[i]);
        eslesmis_t2t1_DengCoord_mtrx.subset(math.index(i + 1, 0), eslesmis_t2t1_DengCoord[i + 1]);
        eslesmis_t2t1_DengCoord_mtrx.subset(math.index(i + 2, 0), eslesmis_t2t1_DengCoord[i + 2]);
    }
    mtrx_Deng_t2_esles_sgnf = eslesmis_t2t1_DengCoord_mtrx;
    //

    //From XYZ to φʎh
    //ʎ
    listboylam_kısmi_t1_t2t1 = [];
    listboylam_kısmi_t2_t2t1 = [];
    for (var i = 0; i < new_point_count_t2t1; i++) {
        var Xcoor_t1_kismi = mtrx_Deng_t1_sgnf.subset(math.index((3 * i), 0));
        var Ycoor_t1_kismi = mtrx_Deng_t1_sgnf.subset(math.index(((3 * i) + 1), 0));
        var Xcoor_t2_esles_kismi = mtrx_Deng_t2_esles_sgnf.subset(math.index((3 * i), 0));
        var Ycoor_t2_esles_kismi = mtrx_Deng_t2_esles_sgnf.subset(math.index(((3 * i) + 1), 0));

        function boylam(X, Y) {
            if (X === 0 && Y > 0) {
                return 0;
            } else if (X > 0 && Y > 0) {
                return (math.atan(Y / X)) * (180 / Math.PI);
            } else if (X < 0 && Y >= 0) {
                return 180 - ((math.atan(math.abs(Y / X))) * (180 / Math.PI));
            } else if (X > 0 && Y < 0) {
                return (math.atan(Y / X)) * (180 / Math.PI);
            } else if (X < 0 && Y <= 0) {
                return -180 + ((math.atan(Y / X)) * (180 / Math.PI));
            }
        }

        var boylam_t1_kismi = boylam(Xcoor_t1_kismi, Ycoor_t1_kismi);
        var boylam_t2_kismi = boylam(Xcoor_t2_esles_kismi, Ycoor_t2_esles_kismi);

        listboylam_kısmi_t1_t2t1.push(boylam_t1_kismi);
        listboylam_kısmi_t2_t2t1.push(boylam_t2_kismi);
    }
    //

    // φ
    listenlem_kısmi_t1_t2t1 = [];
    let listro_t1_t1t2 = [];
    for (var j = 0; j < new_point_count_t2t1; j++) {
        var Xcoor_t1_kismi = mtrx_Deng_t1_sgnf.subset(math.index((3 * j), 0));
        var Ycoor_t1_kismi = mtrx_Deng_t1_sgnf.subset(math.index(((3 * j) + 1), 0));
        var Zcoor_t1_kismi = mtrx_Deng_t1_sgnf.subset(math.index(((3 * j) + 2), 0));

        //GRS80 parameters
        a_GRS80_t1 = 6378137.0;
        b_GRS80_t1 = 6356752.3141;
        e2_GRS80_t1 = (Math.pow(a_GRS80_t1, 2) - Math.pow(b_GRS80_t1, 2)) / Math.pow(a_GRS80_t1, 2);

        enlem = [];
        φ = [];
        ρ = [];
        ro = [];
        φ[0] = 0;
        for (var i = 0; i < Infinity; i++) {
            ρ[i] = (a_GRS80_t1 / math.sqrt(1 - (e2_GRS80_t1 * math.pow(math.sin(φ[i] * Math.PI / 180), 2))))
            φ[i + 1] = math.atan((Zcoor_t1_kismi + (e2_GRS80_t1 * ρ[i] * math.sin(φ[i] * Math.PI / 180))) / math.sqrt(math.pow(Xcoor_t1_kismi, 2) + math.pow(Ycoor_t1_kismi, 2))) * (180 / Math.PI);

            if ((math.abs((φ[i + 1] - φ[i])) * 3600) <= 0.00001) {
                listenlem_kısmi_t1_t2t1.push((φ[i + 1])); //enlem = (φ[i + 1]); //enlem.push(φ[i + 1]);

                ro = (a_GRS80_t1 / math.sqrt(1 - (e2_GRS80_t1 * math.pow(math.sin(φ[i + 1] * Math.PI / 180), 2))));
                listro_t1_t1t2.push(ro);
                break;
            }
        }
    }

    // φ
    listenlem_kısmi_t2_t2t1 = [];
    let listro_t2_t1t2 = [];
    for (var j = 0; j < new_point_count_t2t1; j++) {
        var Xcoor_t2_esles_kismi = mtrx_Deng_t2_esles_sgnf.subset(math.index((3 * j), 0));
        var Ycoor_t2_esles_kismi = mtrx_Deng_t2_esles_sgnf.subset(math.index(((3 * j) + 1), 0));
        var Zcoor_t2_esles_kismi = mtrx_Deng_t2_esles_sgnf.subset(math.index(((3 * j) + 2), 0));

        //GRS80 parameters
        a_GRS80_t1 = 6378137.0;
        b_GRS80_t1 = 6356752.3141;
        e2_GRS80_t1 = (Math.pow(a_GRS80_t1, 2) - Math.pow(b_GRS80_t1, 2)) / Math.pow(a_GRS80_t1, 2);

        enlem = [];
        φ = [];
        ρ = [];
        ro = [];
        φ[0] = 0;
        for (var i = 0; i < Infinity; i++) {
            ρ[i] = (a_GRS80_t1 / math.sqrt(1 - (e2_GRS80_t1 * math.pow(math.sin(φ[i] * Math.PI / 180), 2))))
            φ[i + 1] = math.atan((Zcoor_t2_esles_kismi + (e2_GRS80_t1 * ρ[i] * math.sin(φ[i] * Math.PI / 180))) / math.sqrt(math.pow(Xcoor_t2_esles_kismi, 2) + math.pow(Ycoor_t2_esles_kismi, 2))) * (180 / Math.PI);

            if ((math.abs((φ[i + 1] - φ[i])) * 3600) <= 0.00001) {
                listenlem_kısmi_t2_t2t1.push((φ[i + 1])); //enlem = (φ[i + 1]); //enlem.push(φ[i + 1]);

                ro = (a_GRS80_t1 / math.sqrt(1 - (e2_GRS80_t1 * math.pow(math.sin(φ[i + 1] * Math.PI / 180), 2))));
                listro_t2_t1t2.push(ro);
                break;
            }
        }
    }
    //

    //h
    h_elipsoit_yuk_kısmi_t1_t2t1 = [];
    h_elipsoit_yuk_kısmi_t2_t2t1 = [];
    for (var j = 0; j < new_point_count_t2t1; j++) {
        var X_kısmi_t1 = mtrx_Deng_t1_sgnf.subset(math.index((3 * j), 0));
        var h1_kısmi_t1 = math.divide(X_kısmi_t1, (math.cos(listenlem_kısmi_t1_t2t1[j] * Math.PI / 180) * math.cos(listboylam_kısmi_t1_t2t1[j] * Math.PI / 180)));
        var payda_N_t1 = math.sqrt(1 - (e2_GRS80_t1 * (math.pow(math.sin(listenlem_kısmi_t1_t2t1[j] * Math.PI / 180), 2))))
        let N_GRS80_t1 = math.divide(a_GRS80_t1, payda_N_t1);

        var X_kısmi_t2 = mtrx_Deng_t2_esles_sgnf.subset(math.index((3 * j), 0));
        var h1_kısmi_t2 = math.divide(X_kısmi_t2, (math.cos(listenlem_kısmi_t2_t2t1[j] * Math.PI / 180) * math.cos(listboylam_kısmi_t2_t2t1[j] * Math.PI / 180)));
        var payda_N_t2 = math.sqrt(1 - (e2_GRS80_t1 * (math.pow(math.sin(listenlem_kısmi_t2_t2t1[j] * Math.PI / 180), 2))))
        let N_GRS80_t2 = math.divide(a_GRS80_t1, payda_N_t2);

        h_elipsoit_yuk_kısmi_t1_t2t1.push(h1_kısmi_t1 - N_GRS80_t1);
        h_elipsoit_yuk_kısmi_t2_t2t1.push(h1_kısmi_t2 - N_GRS80_t2);
    }
    //

    //h difference
    h_elipsoit_fark_kismi_t2t1 = math.subtract(h_elipsoit_yuk_kısmi_t2_t2t1, h_elipsoit_yuk_kısmi_t1_t2t1);
    //

    //
    let matrix_NN_kismi_t2t1 = math.zeros(new_point_count_t2t1, 1);
    let matrix_h_kismi_t2t1 = math.zeros(new_point_count_t2t1, 1);
    for (let i = 0; i < new_point_count_t2t1; i++) {
        var NN_t2t1 = Noktalar_t1_sgnf[i];
        var h_fark = math.multiply(100, h_elipsoit_fark_kismi_t2t1[i]).toFixed(2);
        matrix_NN_kismi_t2t1.subset(math.index(i, 0), NN_t2t1);
        matrix_h_kismi_t2t1.subset(math.index(i, 0), h_fark);
    }
    //
    //

    //From φʎ to N,E,U
    //T1
    Dogu_t1_t2t1 = [];
    Kuzey_t1_t2t1 = [];
    for (var i = 0; i < new_point_count_t2t1; i++) {
        Jeo2Duzlem(listenlem_kısmi_t1_t2t1[i], listboylam_kısmi_t1_t2t1[i], DOM_t1)

        Dogu_t1_t2t1.push(Easting);
        Kuzey_t1_t2t1.push(Northing);
    }
    //

    //T2
    Dogu_t2_t2t1 = [];
    Kuzey_t2_t2t1 = [];
    for (var i = 0; i < new_point_count_t2t1; i++) {
        Jeo2Duzlem(listenlem_kısmi_t2_t2t1[i], listboylam_kısmi_t2_t2t1[i], DOM_t1)

        Dogu_t2_t2t1.push(Easting);
        Kuzey_t2_t2t1.push(Northing);
    }
    //

    //
    let matrixKismiDeng_DoguKuzey_t1_t2t1 = math.zeros(new_point_count_t2t1, 2);
    let matrixKismiDeng_DoguKuzey_t2_t2t1 = math.zeros(new_point_count_t2t1, 2);
    for (let i = 0; i < new_point_count_t2t1; i++) {
        var dogu_t1 = Dogu_t1_t2t1[i].toFixed(3);
        var kuzey_t1 = Kuzey_t1_t2t1[i].toFixed(3);
        var dogu_t2 = Dogu_t2_t2t1[i].toFixed(3);
        var kuzey_t2 = Kuzey_t2_t2t1[i].toFixed(3);

        matrixKismiDeng_DoguKuzey_t1_t2t1.subset(math.index(i, 0), dogu_t1);
        matrixKismiDeng_DoguKuzey_t1_t2t1.subset(math.index(i, 1), kuzey_t1);
        matrixKismiDeng_DoguKuzey_t2_t2t1.subset(math.index(i, 0), dogu_t2);
        matrixKismiDeng_DoguKuzey_t2_t2t1.subset(math.index(i, 1), kuzey_t2);
    }
    //

    //
    mtrx_SagaYukariFark_t2t1_Kismi = math.subtract(matrixKismiDeng_DoguKuzey_t2_t2t1, matrixKismiDeng_DoguKuzey_t1_t2t1);
    //

    //
    mtrx_NN_EastNorth_h_t2t1 = math.concat(matrix_NN_kismi_t2t1, math.multiply(100, mtrx_SagaYukariFark_t2t1_Kismi), matrix_h_kismi_t2t1)
    //

    //Topocentric East/North/Up (U/V/W) from X/Y/Z (Toposentrik Coordinate Difference)
    E_topocentric_t2t1 = [];
    N_topocentric_t2t1 = [];
    U_topocentric_t2t1 = [];
    for (let i = 0; i < new_point_count_t2t1; i++) {
        phi0_topoc_t2t1 = listenlem_kısmi_t1_t2t1[i];
        lamda0_topoc_t2t1 = listboylam_kısmi_t1_t2t1[i];

        X0_topoc_t2t1 = mtrx_Deng_t1_sgnf.subset(math.index((3 * i), 0));
        Y0_topoc_t2t1 = mtrx_Deng_t1_sgnf.subset(math.index(((3 * i) + 1), 0));
        Z0_topoc_t2t1 = mtrx_Deng_t1_sgnf.subset(math.index(((3 * i) + 2), 0));

        X_topoc_t2t1 = mtrx_Deng_t2_esles_sgnf.subset(math.index((3 * i), 0));
        Y_topoc_t2t1 = mtrx_Deng_t2_esles_sgnf.subset(math.index(((3 * i) + 1), 0));
        Z_topoc_t2t1 = mtrx_Deng_t2_esles_sgnf.subset(math.index(((3 * i) + 2), 0));;

        E_topoc_t2t1 = (-(X_topoc_t2t1 - X0_topoc_t2t1) * math.sin(lamda0_topoc_t2t1 * Math.PI / 180)) + ((Y_topoc_t2t1 - Y0_topoc_t2t1) * math.cos(lamda0_topoc_t2t1 * Math.PI / 180));
        E_topocentric_t2t1.push(E_topoc_t2t1);

        N_topoc_t2t1 = (-(X_topoc_t2t1 - X0_topoc_t2t1) * math.sin(phi0_topoc_t2t1 * Math.PI / 180) * math.cos(lamda0_topoc_t2t1 * Math.PI / 180)) - ((Y_topoc_t2t1 - Y0_topoc_t2t1) * math.sin(phi0_topoc_t2t1 * Math.PI / 180) * math.sin(lamda0_topoc_t2t1 * Math.PI / 180)) + ((Z_topoc_t2t1 - Z0_topoc_t2t1) * math.cos(phi0_topoc_t2t1 * Math.PI / 180));
        N_topocentric_t2t1.push(N_topoc_t2t1);

        U_topoc_t2t1 = ((X_topoc_t2t1 - X0_topoc_t2t1) * math.cos(phi0_topoc_t2t1 * Math.PI / 180) * math.cos(lamda0_topoc_t2t1 * Math.PI / 180)) + ((Y_topoc_t2t1 - Y0_topoc_t2t1) * math.cos(phi0_topoc_t2t1 * Math.PI / 180) * math.sin(lamda0_topoc_t2t1 * Math.PI / 180)) + ((Z_topoc_t2t1 - Z0_topoc_t2t1) * math.sin(phi0_topoc_t2t1 * Math.PI / 180));
        U_topocentric_t2t1.push(U_topoc_t2t1);
    }

    //Matrix Form of Topocentric Coordinates
    let matrixKismiDeng_Topocentric_t2t1 = math.zeros(new_point_count_t2t1, 3);
    for (let i = 0; i < new_point_count_t2t1; i++) {
        var E = E_topocentric_t2t1[i];
        var N = N_topocentric_t2t1[i];
        var U = U_topocentric_t2t1[i];

        matrixKismiDeng_Topocentric_t2t1.subset(math.index(i, 0), E);
        matrixKismiDeng_Topocentric_t2t1.subset(math.index(i, 1), N);
        matrixKismiDeng_Topocentric_t2t1.subset(math.index(i, 2), U);
    }

    //
    mtrx_NN_EastNorth_h_Topocentric_t2t1 = math.concat(mtrx_NN_EastNorth_h_t2t1, math.multiply(100, matrixKismiDeng_Topocentric_t2t1))
    //

    //d
    mtrx_d_t2t1_sgnf = math.subtract(mtrx_Deng_t2_esles_sgnf, mtrx_Deng_t1_sgnf);
    //

    Noktalar_t1_sgnf_lowerCase = [];
    Noktalar_t2_sgnf_lowerCase = [];
    for (let i = 0; i < Noktalar_t1_sgnf.length; i++) {
        Noktalar_t1_sgnf_lowerCase.push(Noktalar_t1_sgnf[i].toLowerCase());
        Noktalar_t2_sgnf_lowerCase.push(Noktalar_t2_sgnf[i].toLowerCase());
    }

    //
    const rows_Qt2t1_sgnf = new_point_count_t2t1 * 3;
    const columns_Qt2t1_sgnf = new_point_count_t2t1 * 3;
    let matrix_Qt2t1_sgnf = math.zeros(rows_Qt2t1_sgnf, columns_Qt2t1_sgnf);
    for (let i = 0; i < new_point_count_t2t1; i++) {
        let l = Noktalar_t1_sgnf_lowerCase.indexOf(Noktalar_t2_sgnf_lowerCase[i]);
        for (let m = 0; m < new_point_count_t2t1; m++) {
            //Get the cofactor matrices of unknown in Period 2_sgnf
            var Qt2_11_sgnf = mtrx_QX_t2_sgnf.subset(math.index((3 * i), (3 * m)));
            var Qt2_12_sgnf = mtrx_QX_t2_sgnf.subset(math.index((3 * i), ((3 * m) + 1)));
            var Qt2_13_sgnf = mtrx_QX_t2_sgnf.subset(math.index((3 * i), ((3 * m) + 2)));

            var Qt2_21_sgnf = mtrx_QX_t2_sgnf.subset(math.index(((3 * i) + 1), (3 * m)));
            var Qt2_22_sgnf = mtrx_QX_t2_sgnf.subset(math.index(((3 * i) + 1), ((3 * m) + 1)));
            var Qt2_23_sgnf = mtrx_QX_t2_sgnf.subset(math.index(((3 * i) + 1), ((3 * m) + 2)));

            var Qt2_31_sgnf = mtrx_QX_t2_sgnf.subset(math.index(((3 * i) + 2), (3 * m)));
            var Qt2_32_sgnf = mtrx_QX_t2_sgnf.subset(math.index(((3 * i) + 2), ((3 * m) + 1)));
            var Qt2_33_sgnf = mtrx_QX_t2_sgnf.subset(math.index(((3 * i) + 2), ((3 * m) + 2)));

            n = Noktalar_t1_sgnf_lowerCase.indexOf(Noktalar_t2_sgnf_lowerCase[m]);
            //Replace the matrix_Qt2t1_sgnf with the cofactor matrices of unknown in Period 2_sgnf
            matrix_Qt2t1_sgnf.subset(math.index((3 * l), (3 * n)), Qt2_11_sgnf);
            matrix_Qt2t1_sgnf.subset(math.index((3 * l), ((3 * n) + 1)), Qt2_12_sgnf);
            matrix_Qt2t1_sgnf.subset(math.index((3 * l), ((3 * n) + 2)), Qt2_13_sgnf);

            matrix_Qt2t1_sgnf.subset(math.index(((3 * l) + 1), (3 * n)), Qt2_21_sgnf);
            matrix_Qt2t1_sgnf.subset(math.index(((3 * l) + 1), ((3 * n) + 1)), Qt2_22_sgnf);
            matrix_Qt2t1_sgnf.subset(math.index(((3 * l) + 1), ((3 * n) + 2)), Qt2_23_sgnf);

            matrix_Qt2t1_sgnf.subset(math.index(((3 * l) + 2), (3 * n)), Qt2_31_sgnf);
            matrix_Qt2t1_sgnf.subset(math.index(((3 * l) + 2), ((3 * n) + 1)), Qt2_32_sgnf);
            matrix_Qt2t1_sgnf.subset(math.index(((3 * l) + 2), ((3 * n) + 2)), Qt2_33_sgnf);
        }
    }
    //

    //
    mtrxQdd_t2t1_fark_deneme = math.subtract(matrix_Qt2t1_sgnf, mtrx_QX_t1_sgnf);
    mtrx_Qdd_t2t1_Sgnf = math.add(mtrx_QX_t1_sgnf, matrix_Qt2t1_sgnf);
    //

    //
    d_vector_t2t1_sgnf = [];
    T_test_t2t1_sgnf = [];
    F_t2t1_sgnf = [];
    Test_Sonucu_t2t1 = [];
    for (let k = 0; k < new_point_count_t2t1; k++) {
        matrix_d_t2t1_i = math.zeros(3, 1);
        dx_t2t1 = mtrx_d_t2t1_sgnf.subset(math.index((3 * k), 0));
        dy_t2t1 = mtrx_d_t2t1_sgnf.subset(math.index(((3 * k) + 1), 0));
        dz_t2t1 = mtrx_d_t2t1_sgnf.subset(math.index(((3 * k) + 2), 0));

        matrix_d_t2t1_i.subset(math.index(0, 0), dx_t2t1);
        matrix_d_t2t1_i.subset(math.index(1, 0), dy_t2t1);
        matrix_d_t2t1_i.subset(math.index(2, 0), dz_t2t1);

        matrix_Qdd_t2t1_i = math.zeros(3, 3);
        matrix_Qdd_t2t1_i.subset(math.index(0, 0), mtrx_Qdd_t2t1_Sgnf.subset(math.index((3 * k), (3 * k))));
        matrix_Qdd_t2t1_i.subset(math.index(0, 1), mtrx_Qdd_t2t1_Sgnf.subset(math.index((3 * k), ((3 * k) + 1))));
        matrix_Qdd_t2t1_i.subset(math.index(0, 2), mtrx_Qdd_t2t1_Sgnf.subset(math.index((3 * k), ((3 * k) + 2))));

        matrix_Qdd_t2t1_i.subset(math.index(1, 0), mtrx_Qdd_t2t1_Sgnf.subset(math.index(((3 * k) + 1), (3 * k))));
        matrix_Qdd_t2t1_i.subset(math.index(1, 1), mtrx_Qdd_t2t1_Sgnf.subset(math.index(((3 * k) + 1), ((3 * k) + 1))));
        matrix_Qdd_t2t1_i.subset(math.index(1, 2), mtrx_Qdd_t2t1_Sgnf.subset(math.index(((3 * k) + 1), ((3 * k) + 2))));

        matrix_Qdd_t2t1_i.subset(math.index(2, 0), mtrx_Qdd_t2t1_Sgnf.subset(math.index(((3 * k) + 2), (3 * k))));
        matrix_Qdd_t2t1_i.subset(math.index(2, 1), mtrx_Qdd_t2t1_Sgnf.subset(math.index(((3 * k) + 2), ((3 * k) + 1))));
        matrix_Qdd_t2t1_i.subset(math.index(2, 2), mtrx_Qdd_t2t1_Sgnf.subset(math.index(((3 * k) + 2), ((3 * k) + 2))));

        d_t2t1_Sgnf_mtrx = math.sqrt(math.abs(math.multiply(math.transpose(matrix_d_t2t1_i), matrix_d_t2t1_i)));
        d_t2t1_Sgnf = d_t2t1_Sgnf_mtrx.subset(math.index(0, 0));
        d_vector_t2t1_sgnf.push(d_t2t1_Sgnf);
        //

        T_Test_t2t1_Sgnf_mtrx = math.divide((math.multiply(math.transpose(matrix_d_t2t1_i), math.inv(matrix_Qdd_t2t1_i), matrix_d_t2t1_i)), math.multiply(3, So2_t2t1_sgnf));
        T_t2t1_Sgnf = T_Test_t2t1_Sgnf_mtrx.subset(math.index(0, 0));
        T_test_t2t1_sgnf.push(T_t2t1_Sgnf);
        //

        //
        F_Value_t2t1_Sgnf = jStat.centralF.inv(0.95, 3, math.add(f_sgnf_t1, f_sgnf_t2));
        F_t2t1_sgnf.push(F_Value_t2t1_Sgnf);
        //

        if (T_t2t1_Sgnf < F_Value_t2t1_Sgnf) {
            Test_Sonucu_t2t1.push("Insignificant.");
        } else {
            Test_Sonucu_t2t1.push("Point motion is significant.");
        }
    }

    let matrix_Sgnf_Results_t2t1 = math.zeros(new_point_count_t2t1, 4);
    for (let i = 0; i < new_point_count_t2t1; i++) {
        matrix_Sgnf_Results_t2t1.subset(math.index(i, 0), Noktalar_t1_sgnf[i]);
        matrix_Sgnf_Results_t2t1.subset(math.index(i, 1), T_test_t2t1_sgnf[i].toFixed(2));
        matrix_Sgnf_Results_t2t1.subset(math.index(i, 2), F_t2t1_sgnf[i].toFixed(2));
        matrix_Sgnf_Results_t2t1.subset(math.index(i, 3), Test_Sonucu_t2t1[i]);
    };
    //

    $("#ExportSgnfTest").show();

    document.getElementById("ExportSgnfTest").innerHTML = "<i class='fa fa-file-excel-o'></i> Export Significance Test Results to Excel <sub>(t2-t1)</sub>"
    document.getElementById("sgnf_PN").innerHTML = "Point Name <sub>(t2-t1)</sub>"
    document.getElementById("sgnf_T").innerHTML = "Test Value <sub>(t2-t1)</sub>"
    document.getElementById("sgnf_F").innerHTML = "F Value <sub>(t2-t1)</sub>"

    var mytable_sgnf_t2t1 = document.getElementById('TableSgnf_t2t1')
    var tblBody_sgnf_t2t1 = document.createElement("tbody");
    for (let i = 0; i < new_point_count_t2t1; i++) {
        var row = document.createElement("tr");
        for (let j = 0; j < 4; j++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode(matrix_Sgnf_Results_t2t1.subset(math.index(i, j)));
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody_sgnf_t2t1.appendChild(row);
    }
    mytable_sgnf_t2t1.appendChild(tblBody_sgnf_t2t1);
    //

    document.getElementById("CoordDifference").disabled = false;

    //
    $("#CoordDifference").click(function () {
        if (typeof layerGroup_fark_t3_t1 === 'undefined' || layerGroup_fark_t3_t1 === null) {
            console.log('the layerGroup_fark_t3_t1 is not available...');
        } else if (map.hasLayer(layerGroup_fark_t3_t1)) {
            map.removeLayer(layerGroup_fark_t3_t1);
        };
        if (typeof layerGroup_fark_t3_t2 === 'undefined' || layerGroup_fark_t3_t2 === null) {
            console.log('the layerGroup_fark_t3_t1 is not available...');
        } else if (map.hasLayer(layerGroup_fark_t3_t2)) {
            map.removeLayer(layerGroup_fark_t3_t2);
        };
        layerGroup_fark_t2_t1 = L.layerGroup().addTo(map);

        for (var i = 0; i < new_point_count_t2t1; i++) {
            nokta_adi_t2_t1 = Noktalar_t1_sgnf[i];
            SagaDeger_fark_t2t1 = math.multiply(100, mtrx_SagaYukariFark_t2t1_Kismi.subset(math.index(i, 0))).toFixed(2);
            YukariDeger_fark_t2t1 = math.multiply(100, mtrx_SagaYukariFark_t2t1_Kismi.subset(math.index(i, 1))).toFixed(2);
            h_fark_kismi_t2t1 = math.multiply(100, h_elipsoit_fark_kismi_t2t1[i]).toFixed(2);
            var template_fark_t2_t1 =
                "<table id='table_popup_main'>\
                          <caption id='table_caption'>Coordinate Differences Table</caption>\
                          <tr>\
                            <th id='table_th_1'>Point</th>\
                            <th id='table_th_2' colspan='2'>Coordinate Difference (cm)</th> \
                          </tr>\
                          <tr>\
                            <th id='table_th_4' rowspan='4'>" + nokta_adi_t2_t1 + "</th>\
                          </tr>\
                          <tr id='table_popup'>\
                            <td id='table_td_1'>Easting <sub>2-1</sub></td>\
                            <td id='table_td_2'>" + SagaDeger_fark_t2t1 + "</td>\
                          </tr>\
                          <tr id='table_popup'>\
                            <td id='table_td_5'>Northing <sub>2-1</sub></td>\
                            <td id='table_td_6'>" + YukariDeger_fark_t2t1 + "</td>\
                          </tr>\
                          <tr id='table_popup'>\
                            <td id='table_td_9'>h <sub>2-1</sub></td>\
                            <td id='table_td_10'>" + h_fark_kismi_t2t1 + "</td>\
                          </tr>\
                    </table>"
            marker_fark_t2_t1 = new L.marker([listenlem_kısmi_t1_t2t1[i], listboylam_kısmi_t1_t2t1[i]], {
                    icon: beyaz_nirengi
                })
                .bindPopup(template_fark_t2_t1)
            layerGroup_fark_t2_t1.addLayer(marker_fark_t2_t1).addTo(map);
        }
        map.setView(new L.LatLng((math.sum(listenlem_kısmi_t1_t2t1) / listenlem_kısmi_t1_t2t1.length), (math.sum(listboylam_kısmi_t1_t2t1) / listboylam_kısmi_t1_t2t1.length)), 8);

        document.getElementById("ExportCoordDifference").disabled = false;
        document.getElementById("ExportCoordDifference").innerHTML = "<i class='fa fa-file-excel-o'></i> Export Coordinate Differences <sub>(t2-t1)</sub>"

        document.getElementById("farkCapt").innerHTML = "Coordinate Differences Table (t2-t1)"
        document.getElementById("farkE").innerHTML = "Easting <sub>(t2-t1)</sub> cm"
        document.getElementById("farkN").innerHTML = "Northing <sub>(t2-t1)</sub> cm"
        document.getElementById("farkh").innerHTML = "h <sub>(t2-t1)</sub> cm"
        document.getElementById("farkE_topoc").innerHTML = "East <sub>(t2-t1)</sub> cm"
        document.getElementById("farkN_topoc").innerHTML = "North <sub>(t2-t1)</sub> cm"
        document.getElementById("farkU_topoc").innerHTML = "Up <sub>(t2-t1)</sub> cm"

        //
        var mytable = document.getElementById('TableDiff')
        var tblBody = document.createElement("tbody");
        for (var i = 0; i < new_point_count_t2t1; i++) {
            var row = document.createElement("tr");
            for (var j = 0; j < 7; j++) {
                var cell = document.createElement("td");
                var cellText = document.createTextNode(mtrx_NN_EastNorth_h_Topocentric_t2t1.subset(math.index(i, j)));
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            tblBody.appendChild(row);
        }
        mytable.appendChild(tblBody);
        //----
    });
    //

    //Legend
    legend.addTo(map);
    //

    // Show Velocity_t2t1
    $("#VelocityVectors").hide();
    $("#Velocity_t2t1").show();
    $("#Velocity_t3t1").hide();
    $("#Velocity_t3t2").hide();
});
//---

//--- Velocity Vectors ---
$("#Velocity_t2t1").click(function () {
    //--- 2. Fundamental Calculations on Ellipsoid ---
    list_AzimutP1P2 = [];
    for (var i = 0; i < (NoktaSayisi_t1 - static_point_count_t1t2); i++) {
        elipsoid_2nci_Temel_Odev(listenlem_kısmi_t1_t2t1[i], listboylam_kısmi_t1_t2t1[i], listenlem_kısmi_t2_t2t1[i], listboylam_kısmi_t2_t2t1[i])
        list_AzimutP1P2.push(azimut_P1_P2);
    }
    //---

    //---Velocity Vectors (From Easting and Northing Values)
    VectorDist_t2t1 = [];
    VectorDist_Fixed_t2t1 = [];
    for (var i = 0; i < new_point_count_t2t1; i++) {
        var distSaga_t2t1 = Math.pow(mtrx_SagaYukariFark_t2t1_Kismi.subset(math.index(i, 0)), 2);
        var distYukari_t2t1 = Math.pow(mtrx_SagaYukariFark_t2t1_Kismi.subset(math.index(i, 1)), 2);
        var VectorDist_t2t1_a = math.sqrt(distSaga_t2t1 + distYukari_t2t1);

        VectorDist_t2t1.push(VectorDist_t2t1_a);
        VectorDist_Fixed_t2t1.push(VectorDist_t2t1[i].toFixed(2));
    }
    //---

    //--- Vertical Displacement Vector (1. Ellipsoid Fundamental Calculations)
    list_Vertical_NewPoint_Enlem_t2t1 = [];
    list_Vertical_NewPoint_Boylam_t2t1 = [];
    for (var i = 0; i < new_point_count_t2t1; i++) {
        GenisletmeKatsayisi_t2t1 = 450000;
        P1PNewPoint_Vertical_t2t1 = (GenisletmeKatsayisi_t2t1 * -1 * h_elipsoit_fark_kismi_t2t1[i])
        list_Vertical_AzimutP1P2 = (180)
        elipsoid_1nci_Temel_Odev(listenlem_kısmi_t1_t2t1[i], listboylam_kısmi_t1_t2t1[i], P1PNewPoint_Vertical_t2t1, list_Vertical_AzimutP1P2)

        list_Vertical_NewPoint_Enlem_t2t1.push(EnlemNewPoint);
        list_Vertical_NewPoint_Boylam_t2t1.push(BoylamNewPoint);
    }
    //---

    //--- Vertical Vectors t2t1
    layerGroup_t2t1 = L.layerGroup().addTo(map);
    for (var i = 0; i < new_point_count_t2t1; i++) {
        var arrow_Vertical = L.polyline([[listenlem_kısmi_t1_t2t1[i], listboylam_kısmi_t1_t2t1[i]], [list_Vertical_NewPoint_Enlem_t2t1[i], list_Vertical_NewPoint_Boylam_t2t1[i]]], {
            color: '#ffff00',
            weight: 2,
            opacity: 1,
            smoothFactor: 1
        }).bindPopup('Route 1');
        var arrowHead_Vertical = L.polylineDecorator(arrow_Vertical, {
            patterns: [
                {
                    offset: '100%',
                    repeat: 0,
                    symbol: L.Symbol.arrowHead({
                        pixelSize: 5,
                        polygon: false,
                        pathOptions: {
                            fillOpacity: 0.75,
                            color: '#ffff00',
                            weight: 2,
                            stroke: true
                        }
                    })
                    }
                    ]
        });

        arrow_Vertical.bindPopup(math.multiply(1000, h_elipsoit_fark_kismi_t2t1[i]).toFixed(2) + ' mm');
        arrow_Vertical.on('mouseover', function (e) {
            this.openPopup();
        });
        arrow_Vertical.on('mouseout', function (e) {
            this.closePopup();
        });
        layerGroup_t2t1.addLayer(arrow_Vertical).addTo(map);
        layerGroup_t2t1.addLayer(arrowHead_Vertical).addTo(map);
    }
    //---

    //--- 1. Fundamental Calculations on Ellipsoid ---
    list_NewPoint_Enlem_t2t1 = [];
    list_NewPoint_Boylam_t2t1 = [];
    for (var i = 0; i < new_point_count_t2t1; i++) {
        GenisletmeKatsayisi_t2t1 = 450000;
        P1PNewPoint_t2t1 = (GenisletmeKatsayisi_t2t1 * VectorDist_t2t1[i])
        elipsoid_1nci_Temel_Odev(listenlem_kısmi_t1_t2t1[i], listboylam_kısmi_t1_t2t1[i], P1PNewPoint_t2t1, list_AzimutP1P2[i])

        list_NewPoint_Enlem_t2t1.push(EnlemNewPoint);
        list_NewPoint_Boylam_t2t1.push(BoylamNewPoint);
    }
    //---

    //--- Velocity Vectors t2t1 ---
    layerGroup_t2t1 = L.layerGroup().addTo(map);
    for (var i = 0; i < new_point_count_t2t1; i++) {
        var arrow = L.polyline([[listenlem_kısmi_t1_t2t1[i], listboylam_kısmi_t1_t2t1[i]], [list_NewPoint_Enlem_t2t1[i], list_NewPoint_Boylam_t2t1[i]]], {
            color: '#ffff00',
            weight: 2,
            opacity: 1,
            smoothFactor: 1
        }).bindPopup('Route 1');
        var arrowHead = L.polylineDecorator(arrow, {
            patterns: [
                {
                    offset: '100%',
                    repeat: 0,
                    symbol: L.Symbol.arrowHead({
                        pixelSize: 5,
                        polygon: false,
                        pathOptions: {
                            fillOpacity: 0.75,
                            color: '#ffff00',
                            weight: 2,
                            stroke: true
                        }
                    })
                    }
                    ]
        });
        arrow.bindPopup(math.multiply(1000, VectorDist_t2t1[i]).toFixed(2) + ' mm');
        arrow.on('mouseover', function (e) {
            this.openPopup();
        });
        arrow.on('mouseout', function (e) {
            this.closePopup();
        });
        layerGroup_t2t1.addLayer(arrow).addTo(map);
        layerGroup_t2t1.addLayer(arrowHead).addTo(map);
    }
    //---

    //--- Show Remove Velocity Vektor Label ---
    $("#velocity_vectors_t2t1").show();

    //--- Error Ellips ---
    for (i = 0; i < (new_point_count_t2t1); i++) {
        var ro = (200 / Math.PI) // Gon cinsinden

        var QXX = parseFloat(mtrx_Qdd_t2t1_Sgnf.subset(math.index((3 * i), (3 * i)))); //mtrx_Qdd_t2t1_Sgnf ---------- mtrx1tum_QX
        var QXY = parseFloat(mtrx_Qdd_t2t1_Sgnf.subset(math.index((3 * i), ((3 * i) + 1))));
        var QYY = parseFloat(mtrx_Qdd_t2t1_Sgnf.subset(math.index(((3 * i) + 1), ((3 * i) + 1))));

        var pay_teta = (2 * QXY);
        var payda_teta = (QXX - QYY);
        var teta_Elips_t2t1_Ham = (1 / 2) * Math.atan(pay_teta / payda_teta) * ro; // Dönüklük Açısı
        if (pay_teta > 0 && payda_teta > 0) {
            // 1. Bölge
            teta_Elips_t2t1 = teta_Elips_t2t1_Ham + 0;
        } else if (pay_teta > 0 && payda_teta < 0) {
            // 2. Bölge
            teta_Elips_t2t1 = teta_Elips_t2t1_Ham + 200;
        } else if (pay_teta < 0 && payda_teta < 0) {
            // 3. Bölge
            teta_Elips_t2t1 = teta_Elips_t2t1_Ham + 200;
        } else if (pay_teta < 0 && payda_teta > 0) {
            // 4. Bölge
            teta_Elips_t2t1 = teta_Elips_t2t1_Ham + 400;
        }

        var W = math.sqrt(Math.pow((QXX - QYY), 2) + (4 * Math.pow(QXY, 2)));

        var lamda1 = ((QXX + QYY + W) / 2);
        var lamda2 = ((QXX + QYY - W) / 2);

        var A_Elps_t2t1 = tumSo_t1 * math.sqrt(lamda1);
        var B_Elps_t2t1 = tumSo_t1 * math.sqrt(lamda2);

        var Elips_YarıEksen_Carpani = GenisletmeKatsayisi_t2t1;

        A_Elips_t2t1 = A_Elps_t2t1 * Elips_YarıEksen_Carpani;
        B_Elips_t2t1 = B_Elps_t2t1 * Elips_YarıEksen_Carpani;
        A_Elps_t2t1_mm = A_Elps_t2t1 * 1000;
        B_Elps_t2t1_mm = B_Elps_t2t1 * 1000;

        tilt_t2t1 = ((0.9 * teta_Elips_t2t1) + 90);

        var ellipse = L.ellipse([list_NewPoint_Enlem_t2t1[i], list_NewPoint_Boylam_t2t1[i]], [A_Elips_t2t1, B_Elips_t2t1], tilt_t2t1, {
                color: '#ffff00',
                fillColor: '#00ffff',
                weight: 2,
                fillOpacity: 0.1
            })
            .bindPopup('a: ' + A_Elps_t2t1_mm.toFixed(2) + ' mm' + '<br>' + 'b: ' + B_Elps_t2t1_mm.toFixed(2) + ' mm' + '<br>' + 'θ: ' + teta_Elips_t2t1_Ham.toFixed(2));
        layerGroup_t2t1.addLayer(ellipse).addTo(map);
    }
    //---

    scale.addTo(map)

    //--- Show/Hide Velocity Vector and Ellips ---
    $('input:checkbox[name=velocity_vectors_t2t1]').click(function () {
        if (map.hasLayer(layerGroup_t2t1)) {
            map.removeLayer(layerGroup_t2t1);
        } else {
            map.addLayer(layerGroup_t2t1);
        }
    });
    //---
});
//---
