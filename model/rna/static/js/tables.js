var tables = function(){ /*
[pdf]
项目名称:人有参转录组测序
委托单位:杭州研趣信息技术有限公司
制定日期:2019年12月11日

[project_info]
项目编号	YFTnjP2019763-02
开题单号	TPL201911248
项目类型	有参考基因组转录组测序
物种名	人
样本形式	原样
样本数目	15
测序平台	Illumina
数据量	6G Data 样本
分析项目	标准生物信息分析
分析者工号	PN120191443
完成日期	2019年12月11日
技术支持	王慧敏（025-58185653-823，wanghm@personalbio.cn）

[library_info]
Sample	Lib. Name	Lib. Insert Size	Sequencing Platform	Sequencing Mode
OHUVEC1	LRA11794	380bp	Illumina	Paired-end,2*150bp
OHUVEC2	LRA11795	380bp	Illumina	Paired-end,2*150bp
OHUVEC3	LRA11796	380bp	Illumina	Paired-end,2*150bp
GOL_HUVEC1	LRA11797	380bp	Illumina	Paired-end,2*150bp
GOL_HUVEC2	LRA11798	380bp	Illumina	Paired-end,2*150bp
GOL_HUVEC3	LRA11799	380bp	Illumina	Paired-end,2*150bp
GOS_HUVEC1	LRA11800	380bp	Illumina	Paired-end,2*150bp
GOS_HUVEC2	LRA11801	380bp	Illumina	Paired-end,2*150bp
GOS_HUVEC3	LRA11802	380bp	Illumina	Paired-end,2*150bp
OSMC1	LRA11803	380bp	Illumina	Paired-end,2*150bp
OSMC2	LRA11804	380bp	Illumina	Paired-end,2*150bp
OSMC3	LRA11805	380bp	Illumina	Paired-end,2*150bp
GOL_SMC1	LRA11806	380bp	Illumina	Paired-end,2*150bp
GOL_SMC2	LRA11807	380bp	Illumina	Paired-end,2*150bp
GOL_SMC3	LRA11808	380bp	Illumina	Paired-end,2*150bp

[rawdata_info]
Sample	Reads No.	Bases (bp)	Q30 (bp)	N (%)	Q20 (%)	Q30 (%)
OHUVEC1	51274178	7691126700	7255263690	0.00071	97.76	94.33
OHUVEC2	50334172	7550125800	7109496194	0.000717	97.61	94.16
OHUVEC3	45381728	6807259200	6405070262	0.000716	97.64	94.09
GOL_HUVEC1	47442474	7116371100	6648776219	0.000686	97.27	93.42
GOL_HUVEC2	50538240	7580736000	7098489295	0.000829	97.3	93.63
GOL_HUVEC3	58534350	8780152500	8074287132	0.00077	96.52	91.96
GOS_HUVEC1	49701990	7455298500	7015412626	0.000709	97.68	94.09
GOS_HUVEC2	46955674	7043351100	6631245533	0.000711	97.7	94.14
GOS_HUVEC3	44894440	6734166000	6289941524	0.000618	97.36	93.4
OSMC1	50354322	7553148300	7108533813	0.000711	97.76	94.11
OSMC2	51412176	7711826400	7279529017	0.000714	97.88	94.39
OSMC3	47596178	7139426700	6739126814	0.000692	97.91	94.39
GOL_SMC1	48860112	7329016800	6918250249	0.000715	97.83	94.39
GOL_SMC2	53165754	7974863100	7535590550	0.000717	97.9	94.49
GOL_SMC3	48186464	7227969600	6823067114	0.00072	97.88	94.39

[cleandata_info]
Sample	Clean Reads No.	Clean Data (bp)	Clean Reads %	Clean Data %
OHUVEC1	46663884	6999582600	91	91
OHUVEC2	45667584	6850137600	90.72	90.72
OHUVEC3	41830476	6274571400	92.17	92.17
GOL_HUVEC1	43548110	6532216500	91.79	91.79
GOL_HUVEC2	46190460	6928569000	91.39	91.39
GOL_HUVEC3	53023760	7953564000	90.58	90.58
GOS_HUVEC1	45659894	6848984100	91.86	91.86
GOS_HUVEC2	43012024	6451803600	91.6	91.6
GOS_HUVEC3	42041400	6306210000	93.64	93.64
OSMC1	46741372	7011205800	92.82	92.82
OSMC2	47793440	7169016000	92.96	92.96
OSMC3	44381252	6657187800	93.24	93.24
GOL_SMC1	45548080	6832212000	93.22	93.22
GOL_SMC2	49055526	7358328900	92.26	92.26
GOL_SMC3	44680508	6702076200	92.72	92.72

[map_stat]
Sample	Clean_Reads	Total_Mapped	Multiple_Mapped	Uniquely_Mapped
OHUVEC1	46663884	44233901 (94.79%)	1709142 (3.86%)	42524759 (96.14%)
OHUVEC2	45667584	43189220 (94.57%)	2474989 (5.73%)	40714231 (94.27%)
OHUVEC3	41830476	39632219 (94.74%)	1541791 (3.89%)	38090428 (96.11%)
GOL_HUVEC1	43548110	41232267 (94.68%)	6491354 (15.74%)	34740913 (84.26%)
GOS_HUVEC1	45659894	43110802 (94.42%)	2032538 (4.71%)	41078264 (95.29%)
GOS_HUVEC2	43012024	40662816 (94.54%)	1376869 (3.39%)	39285947 (96.61%)
GOS_HUVEC3	42041400	39869440 (94.83%)	23116190 (57.98%)	16753250 (42.02%)
OSMC1	46741372	45527091 (97.40%)	1805854 (3.97%)	43721237 (96.03%)
OSMC2	47793440	46523050 (97.34%)	1647334 (3.54%)	44875716 (96.46%)
OSMC3	44381252	43228934 (97.40%)	1546538 (3.58%)	41682396 (96.42%)
GOL_SMC1	45548080	44340733 (97.35%)	2861342 (6.45%)	41479391 (93.55%)
GOL_SMC2	49055526	47823633 (97.49%)	1918904 (4.01%)	45904729 (95.99%)
GOL_SMC3	44680508	43523071 (97.41%)	1810114 (4.16%)	41712957 (95.84%)
GOL_HUVEC2	46190460	43544594 (94.27%)	2357966 (5.42%)	41186628 (94.58%)
GOL_HUVEC3	53023760	49802987 (93.93%)	4567224 (9.17%)	45235763 (90.83%)

[map_event_stat]
Sample	Map_Events	Mapped_to_Gene	Mapped_to_InterGene	Mapped_to_Exon
OHUVEC1	42524759	42306952 (99.49%)	217807 (0.51%)	41358298 (97.76%)
OHUVEC2	40714231	40402959 (99.24%)	311272 (0.76%)	39191360 (97.00%)
OHUVEC3	38090428	37859018 (99.39%)	231410 (0.61%)	36782432 (97.16%)
GOL_HUVEC1	34740913	33734844 (97.10%)	1006069 (2.90%)	32419872 (96.10%)
GOS_HUVEC1	41078264	40831434 (99.40%)	246830 (0.60%)	39959112 (97.86%)
GOS_HUVEC2	39285947	39078195 (99.47%)	207752 (0.53%)	38143047 (97.61%)
GOS_HUVEC3	16753250	11494899 (68.61%)	5258351 (31.39%)	10331836 (89.88%)
OSMC1	43721237	43562913 (99.64%)	158324 (0.36%)	42946652 (98.59%)
OSMC2	44875716	44648892 (99.49%)	226824 (0.51%)	43095556 (96.52%)
OSMC3	41682396	41433710 (99.40%)	248686 (0.60%)	39519777 (95.38%)
GOL_SMC1	41479391	41164365 (99.24%)	315026 (0.76%)	40100678 (97.42%)
GOL_SMC2	45904729	45677530 (99.51%)	227199 (0.49%)	44807972 (98.10%)
GOL_SMC3	41712957	41416279 (99.29%)	296678 (0.71%)	39380810 (95.09%)
GOL_HUVEC2	41186628	40761826 (98.97%)	424802 (1.03%)	39222316 (96.22%)
GOL_HUVEC3	45235763	44493131 (98.36%)	742632 (1.64%)	42812303 (96.22%)

[mRNA_DESeq_exam]
id	baseMean	baseMeanA	baseMeanB	foldChange	log2FoldChange	pval	padj
ENSG00000185745	2452.90029556793	4768.4388305782	137.361760557656	0.0288064428292143	-5.11746466983567	1.03890720945832e-107	1.68541916590424e-103
ENSG00000157601	1174.02651190865	2271.79160795576	76.2614158615385	0.033568843019964	-4.89673337565034	4.33303648117488e-105	3.514742541705e-101
ENSG00000111335	325.437888169344	625.650672786546	25.2251035521429	0.0403181913635519	-4.63242526743886	9.75306748812932e-71	5.27413379533073e-67
ENSG00000134326	233.867360175229	453.957954421988	13.7767659284698	0.03034810998303	-5.04224951853315	1.17838496653533e-67	4.77923482802567e-64

[mRNA_DE_stat]
Control	Treat	Up-regulated	Down-regulated	Total
OSMC	GOL_SMC	83	259	342
OHUVEC	GOS_HUVEC	744	1114	1858
GOL_HUVEC	GOS_HUVEC	461	1126	1587
OHUVEC	GOL_HUVEC	997	1387	2384

[mRNA_GO_enrichment_exam]
GO.ID	Term	Up	Down	DEG	Total	Pvalue	FDR
GO:0022626	cytosolic ribosome	0	29	29	107	2.6e-26	1.07474e-22
GO:0006614	SRP-dependent cotranslational protein targeting to membrane	0	28	28	96	3.4e-26	1.07474e-22

[mRNA_KEGG_enrichment_exam]
Pathway	Level1	Level2	Up_number	Down_number	DEG_number	total_number	Pvalue	FDR
Ribosome	Genetic Information Processing	Translation	0	29	29	131	6.86020016716292e-23	1.36517983326542e-20
Influenza A	Human Diseases	Infectious diseases: Viral	0	19	19	168	5.68797181756287e-10	5.65953195847506e-08

[transcript_exam]
Position	Reference_transcript_id	Class_code
1[-]14388-29354	ENST00000488147	j
1[-]14398-20694	ENST00000488147	j
1[-]14398-29349	ENST00000488147	j
1[-]14398-29349	ENST00000488147	j

[UTR_exam]
Gene_ID	Gene_Name	Position	5'UTR	3'UTR
ENSG00000237973	MTCO1P12	1[+]631074-632616	-	632616-1056119
ENSG00000240409	MTATP8P1	1[+]633535-633741	-	633741-634922
ENSG00000198744	MTCO3P12	1[+]634376-634922	633535-634376	-
ENSG00000230368	FAM41C	1[-]868071-876903	876903-877234	-

[SNP_exam]
Chr	Pos	Ref	Alt	GeneID	GeneName	Element	OHUVEC1_Bases	OHUVEC1_ReadNum	OHUVEC1_Mutation	OHUVEC2_Bases	OHUVEC2_ReadNum	OHUVEC2_Mutation	OHUVEC3_Bases	OHUVEC3_ReadNum	OHUVEC3_Mutation	GOL_HUVEC1_Bases	GOL_HUVEC1_ReadNum	GOL_HUVEC1_Mutation	GOS_HUVEC1_Bases	GOS_HUVEC1_ReadNum	GOS_HUVEC1_Mutation	GOS_HUVEC2_Bases	GOS_HUVEC2_ReadNum	GOS_HUVEC2_Mutation	GOS_HUVEC3_Bases	GOS_HUVEC3_ReadNum	GOS_HUVEC3_Mutation	OSMC1_Bases	OSMC1_ReadNum	OSMC1_Mutation	OSMC2_Bases	OSMC2_ReadNum	OSMC2_Mutation	OSMC3_Bases	OSMC3_ReadNum	OSMC3_Mutation	GOL_SMC1_Bases	GOL_SMC1_ReadNum	GOL_SMC1_Mutation	GOL_SMC2_Bases	GOL_SMC2_ReadNum	GOL_SMC2_Mutation	GOL_SMC3_Bases	GOL_SMC3_ReadNum	GOL_SMC3_Mutation	GOL_HUVEC2_Bases	GOL_HUVEC2_ReadNum	GOL_HUVEC2_Mutation	GOL_HUVEC3_Bases	GOL_HUVEC3_ReadNum	GOL_HUVEC3_Mutation
1	14574	A	G	ENSG00000227232	WASH7P	ncRNA_intronic	A/G	42/21	-	A/G	111/53	-	A/G	48/17	-	A/G	89/40	-	A/G	22/8	-	A/G	21/20	-	A/G	17/9	-	A/G	11/9	-	A/A	20/6	-	A/A	24/5	-	A/G	24/8	-	A/G	18/16	-	A/A	36/7	-	A/G	170/49	-	A/G	171/50	-
1	14590	G	A	ENSG00000227232	WASH7P	ncRNA_intronic	G/A	50/51	-	G/A	125/102	-	G/A	48/41	-	G/A	90/91	-	G/A	25/20	-	G/A	24/39	-	G/A	16/8	-	G/A	17/10	-	G/G	26/6	-	G/G	29/3	-	G/G	29/3	-	G/G	35/8	-	G/A	37/10	-	G/A	170/100	-	G/A	202/93	-
1	14599	T	A	ENSG00000227232	WASH7P	ncRNA_intronic	T/A	52/56	-	T/A	127/108	-	T/A	48/49	-	T/A	89/93	-	T/A	28/26	-	T/A	24/45	-	T/A	17/8	-	T/A	13/13	-	T/A	24/7	-	T/A	22/7	-	T/A	23/10	-	T/A	22/22	-	T/A	33/15	-	T/A	161/109	-	T/A	206/103	-
1	14604	A	G	ENSG00000227232	WASH7P	ncRNA_intronic	A/G	39/70	-	A/G	115/115	-	A/G	45/54	-	A/G	83/97	-	A/G	22/31	-	A/G	23/46	-	A/G	13/10	-	A/G	13/13	-	A/G	25/7	-	A/A	22/6	-	A/G	21/11	-	A/G	22/22	-	A/G	33/15	-	A/G	126/137	-	A/G	180/123	-

[TFs_family_exam]
Gene_ID	Symbol	Family	Description
ENSG00000001167	NFYA	NF-YA	nuclear transcription factor Y subunit alpha[Source:HGNC Symbol;Acc:HGNC:7804]
ENSG00000004848	ARX	Homeobox	aristaless related homeobox [Source:HGNCSymbol;Acc:HGNC:18060]
ENSG00000005073	HOXA11	Homeobox	homeobox A11 [Source:HGNC Symbol;Acc:HGNC:5101]"
ENSG00000005436	GCFC2	Others	GC-rich sequence DNA-binding factor 2 [Source:HGNCSymbol;Acc:HGNC:1317]

[database_info]
Genome	Homo_sapiens.GRCh38.dna.primary_assembly.fa
Genebuild by	Ensembl
Database version	GRCh38.98
Base Pairs	456,897,776

[annotation_summary]
Database	Annotated	Percent
Ensembl	19976	100
GO	19229	96.26
KEGG	13699	68.57
EC	3572	17.88
eggNOG	18056	90.38
UniProtAC	18753	93.87
NCBI_GI	19014	95.18

[genebiotype_stat]
Sample	TR_V_pseudogene	rRNA_pseudogene	lncRNA	translated_processed_pseudogene	IG_C_pseudogene	TR_D_gene	scRNA	TEC	polymorphic_pseudogene	TR_C_gene	processed_pseudogene	IG_J_gene	ribozyme	IG_C_gene	Mt_rRNA	IG_V_gene	transcribed_processed_pseudogene	snoRNA	translated_unprocessed_pseudogene	TR_J_gene	scaRNA	IG_V_pseudogene	transcribed_unitary_pseudogene	pseudogene	snRNA	transcribed_unprocessed_pseudogene	rRNA	vaultRNA	TR_J_pseudogene	IG_D_gene	TR_V_gene	IG_J_pseudogene	IG_pseudogene	sRNA	unitary_pseudogene	misc_RNA	miRNA	protein_coding	unprocessed_pseudogene	Mt_tRNA
OHUVEC1	2	35	116415	9	0	0	10	2656	15996	251	92601	0	0	2	66836	1	13189	217	1	2	14	1	3034	18	263	20179	53	0	0	0	4	0	0	0	167	458	569	17189889	6245	219
OHUVEC2	0	55	127924	1	5	0	11	3136	18366	218	98066	0	0	1	59340	0	14521	251	4	1	5	0	3156	31	340	21267	267	0	0	0	1	0	0	0	193	1000	780	16103918	5286	144
OHUVEC3	2	24	119953	5	0	0	4	2991	13998	200	79605	0	0	4	58968	0	11712	254	4	1	5	0	3331	31	294	20809	26	0	1	0	3	0	0	0	177	563	669	15278456	5625	206
GOL_HUVEC1	0	48	107046	3	0	0	4	3381	8981	159	33814	0	0	7	49215	7	5898	175	13	5	2	0	2919	36	248	17481	229	0	0	0	3	0	0	0	176	2857	831	13459179	7072	329
GOS_HUVEC1	0	16	85253	37	0	0	9	2355	8251	163	55082	0	0	2	61163	2	7104	152	3	0	1	0	1971	32	157	13491	34	0	0	0	4	0	0	0	173	579	346	17026469	6422	318
GOS_HUVEC2	0	25	98248	18	4	0	2	2622	9004	116	56773	0	0	2	47787	1	8258	193	8	0	1	0	2675	29	173	16107	23	0	0	0	2	0	0	0	218	413	433	16127165	6062	202
GOS_HUVEC3	0	8	100828	3	0	0	0	873	2820	64	15544	0	0	0	113928	1	2395	216	1	3	31	0	667	21	119	4120	5600	0	0	0	0	0	0	0	59	26739	162	4040102	1578	75
OSMC1	0	27	90506	9	1	0	27	2343	10380	43	87913	0	0	0	86685	0	10493	144	1	0	6	8	2018	15	137	15459	4	0	0	0	14	0	0	0	327	319	242	18158315	6549	319
OSMC2	0	66	130139	14	0	0	36	3760	7580	51	78859	0	0	0	92469	1	9974	275	3	0	4	17	3320	27	302	20664	3	0	0	0	20	0	0	0	353	539	503	18401369	8686	354
OSMC3	0	68	144925	8	0	0	40	4143	6436	56	70511	0	0	0	93099	0	9848	351	0	1	9	7	3401	20	382	22271	11	0	0	0	14	0	0	0	403	690	547	16894221	8170	406
GOL_SMC1	0	25	104271	18	0	0	30	3037	6898	56	54579	0	0	0	101710	2	6630	209	4	1	7	13	2565	13	203	16999	35	0	0	0	10	0	0	0	345	1787	326	17208529	9758	453
GOL_SMC2	1	49	102358	15	0	0	48	2920	8704	99	71308	0	0	1	117558	0	7966	222	4	1	3	9	2489	21	168	16677	1	0	0	0	23	0	0	0	390	470	308	19229364	10456	554
GOL_SMC3	2	65	146544	16	1	0	15	4840	4305	55	40955	0	0	1	69664	2	6723	300	0	2	14	17	3862	31	362	22870	4	0	0	0	15	0	0	1	470	768	575	17147393	10786	348
GOL_HUVEC2	5	63	132097	6	2	0	0	4514	11056	262	42699	0	0	0	44789	0	7529	255	10	8	5	0	3730	100	313	22087	76	0	0	0	6	0	0	0	291	1655	1013	16257787	8913	362
GOL_HUVEC3	1	36	144468	1	0	0	3	4584	11388	223	41180	0	0	3	45160	0	7074	228	3	0	0	0	3920	40	369	23746	256	0	0	0	0	0	0	0	334	1820	948	17675987	9813	362

[replace_obj]
samples=OHUVEC1,OHUVEC2,OHUVEC3,GOL_HUVEC1,GOL_HUVEC2,GOL_HUVEC3,GOS_HUVEC1,GOS_HUVEC2,GOS_HUVEC3,OSMC1,OSMC2,OSMC3,GOL_SMC1,GOL_SMC2,GOL_SMC3
mRNA_de_pairs=OSMC_vs_GOL_SMC,OHUVEC_vs_GOS_HUVEC,GOL_HUVEC_vs_GOS_HUVEC,OHUVEC_vs_GOL_HUVEC
*/ };
