import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import mainPageImg from '@/assets/images/mainPage.png';
import createInfoPageImg from '@/assets/images/createInfoPage.png';
import createBookPageImg from '@/assets/images/createBookPage.png';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      // style={{
      //   position: 'fixed', // Fixed position for tab panel
      //   left: '300px', // Adjust left position as needed
      //   width: '300px', // Adjust width to accommodate fixed tabs
      // }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {/* <Typography variant="h6" fontWeight="bold"> */}
          <Typography fontWeight="" sx={{ fontSize: '1.3rem' }} className="font-[PR2]">
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
    style: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textAlign: 'left',
    },
  };
}

export default function AboutUsPage() {
  const [value, setValue] = React.useState(7);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="flex bg-linear-gradient-about h-screen w-screen items-center justify-center">
      <div className="flex flex-col gap-y-16">
        <div className="flex items-center justify-center h-screen">
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: 'background.linear-gradient',
              display: 'flex justify-center items-center',
              height: 500,
              width: 1100,
            }}
          >
            <div className="flex flexrow gap-x-10">
              <div className="flex items-center">
                <TabPanel value={value} index={0}>
                  <img src={createInfoPageImg} className="h-96 w-[700px]"></img>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <img src={createInfoPageImg} className="h-96 w-[700px]"></img>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <img src={createBookPageImg} className="h-96 w-[700px]"></img>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <img src={mainPageImg} className="h-96 w-[700px]"></img>
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <img src={mainPageImg} className="h-96 w-[700px]"></img>
                </TabPanel>
                <TabPanel value={value} index={5}>
                  <img src={mainPageImg} className="h-96 w-[700px]"></img>
                </TabPanel>
                <TabPanel value={value} index={6}>
                  <img src={mainPageImg} className="h-96 w-[700px]"></img>
                </TabPanel>
                <TabPanel value={value} index={7}>
                  <img src={mainPageImg} className="h-96 w-[700px]"></img>
                </TabPanel>
              </div>
              <div className="flex flex-col gap-y-10 w-[400px]">
                <div className="flex items-left justify-left font-[PR2] text-4xl -ml-2"></div>
                <div className="flex flex-row">
                  <div className="flex">
                    <Tabs
                      orientation="vertical"
                      value={value}
                      // onChange={handleChange}
                      aria-label="Vertical tabs example"
                      sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                      <div className="align-left" onClick={() => handleChange(0)}>
                        <Tab
                          label="동화책 만드는 방법"
                          {...a11yProps(0)}
                          style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            fontFamily: 'LM',
                            color: '#000000',
                          }}
                        />
                      </div>

                      <div className="align-left" onClick={() => handleChange(1)}>
                        <Tab
                          label="동화책 주인공 설정"
                          {...a11yProps(1)}
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            fontFamily: 'LM',
                            color: value === 1 ? '#001aff' : 'black',
                          }}
                        />
                      </div>
                      {value === 1 && (
                        <div className="text-[1.3rem] font-[PR2] mr-6 pl-10 mb-4 mt-2">
                          동화책 주인공을 설정합니다 생성된 두가지의 스토리 중 하나를 선택합니다
                        </div>
                      )}
                      <div className="align-left" onClick={() => handleChange(2)}>
                        <Tab
                          label="글 선택하기"
                          {...a11yProps(2)}
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            fontFamily: 'LM',
                            color: value === 2 ? '#001aff' : 'black',
                          }}
                        />
                      </div>
                      {value === 2 && (
                        <div className="text-[1.3rem] font-[PR2] mr-6 pl-10 mb-4 mt-2">
                          인공지능이 생성한 두가지의 이야기 중 하나를 선택합니다
                        </div>
                      )}
                      <div className="align-left" onClick={() => handleChange(3)}>
                        <Tab
                          label="그림과 함께 책 읽기"
                          {...a11yProps(3)}
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            fontFamily: 'LM',
                            color: value === 3 ? '#001aff' : 'black',
                          }}
                        />
                      </div>
                      {value === 3 && (
                        <div className="text-[1.3rem] font-[PR2] mr-6 pl-10 mb-4 mt-2">
                          인공지능이 그려준 그림과 함께 책을 읽을 수 있습니다
                        </div>
                      )}
                      <div className="align-left" onClick={() => handleChange(4)}>
                        <Tab
                          label="목소리와 함께 책 읽기"
                          {...a11yProps(4)}
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            fontFamily: 'LM',
                            color: value === 4 ? '#001aff' : 'black',
                          }}
                        />
                      </div>
                      {value === 4 && (
                        <div className="text-[1.3rem] font-[PR2] mr-6 pl-10 mb-4 mt-2">
                          음성 지원으로 생성된 책을 들으며 읽을 수 있습니다
                        </div>
                      )}
                      <div className="align-left" onClick={() => handleChange(5)}>
                        <Tab
                          label="동화책 공유"
                          {...a11yProps(5)}
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            fontFamily: 'LM',
                            color: value === 5 ? '#001aff' : 'black',
                          }}
                        />
                      </div>
                      {value === 5 && (
                        <div className="text-[1.3rem] font-[PR2] mr-6 pl-10 mb-4 mt-2">
                          친구와 함께 내가 만든 책을 공유 할 수 있습니다
                        </div>
                      )}
                      <div className="align-left" onClick={() => handleChange(6)}>
                        <Tab
                          label="한/영 모두 지원"
                          {...a11yProps(6)}
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            fontFamily: 'LM',
                            color: value === 6 ? '#001aff' : 'black',
                          }}
                        />
                      </div>
                      {value === 6 && (
                        <div className="text-[1.3rem] font-[PR2] text-[#f3f3f3] mr-6 pl-10 mb-4 mt-2">
                          모든 기능은 한국어와 영어 두가지 언어로 제공 됩니다
                        </div>
                      )}

                      <div className="align-left" onClick={() => handleChange(7)}>
                        <Tab
                          label=""
                          {...a11yProps(7)}
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            fontFamily: '[PR2]',
                          }}
                        />
                      </div>
                    </Tabs>
                  </div>
                  <div className="flex">
                    <div style={{ maxWidth: '450px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
