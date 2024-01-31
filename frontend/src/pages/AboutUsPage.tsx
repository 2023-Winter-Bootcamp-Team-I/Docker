import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import mainPageImg from '@/assets/images/mainPage.png';
import createInfoPageImg from '@/assets/images/CreateInfoPage.png';
import createBookPageImg from '@/assets/images/CreateBookPage.png';

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
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {/* <Typography variant="h6" fontWeight="bold"> */}
          <Typography fontWeight="" sx={{ fontSize: '1.3rem' }} className="font-jua">
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
  const [value, setValue] = React.useState(6);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="flex bg-linear-gradient h-screen w-screen items-center justify-center">
      <div className="flex flex-col gap-y-16">
        <div className="flex">
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: 'background.linear-gradient',
              display: 'flex justify-center items-center',
              height: 500,
            }}
          >
            <div className="flex flexrow gap-x-10">
              <div className="flex items-center">
                <TabPanel value={value} index={0}>
                  <img src={createInfoPageImg} className="h-96 w-11/12"></img>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <img src={createInfoPageImg} className="h-96 w-11/12"></img>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <img src={createBookPageImg} className="h-96 w-11/12"></img>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <img src={mainPageImg} className="h-96 w-11/12"></img>
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <img src={mainPageImg} className="h-96 w-11/12"></img>
                </TabPanel>
                <TabPanel value={value} index={5}>
                  <img src={mainPageImg} className="h-96 w-11/12"></img>
                </TabPanel>
                <TabPanel value={value} index={6}>
                  <img src={mainPageImg} className="h-96 w-11/12"></img>
                </TabPanel>
              </div>
              <div className="flex flex-col gap-y-8">
                <div className="flex items-left justify-left font-jua text-4xl -ml-2"></div>
                <div className="flex flex-row">
                  <div className="flex">
                    <Tabs
                      orientation="vertical"
                      value={value}
                      onChange={handleChange}
                      aria-label="Vertical tabs example"
                      sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                      <div className="align-left" onClick={() => handleChange(0)}>
                        <Tab
                          label="동화책 만드는 방법"
                          disabled
                          {...a11yProps(0)}
                          style={{
                            fontSize: '2.3rem',
                            fontWeight: 'bold',
                            fontFamily: 'jua',
                            color: '#000000',
                          }}
                        />
                      </div>
                      <div className="align-left" onClick={() => handleChange(1)}>
                        <Tab
                          label="동화책 주인공 설정"
                          {...a11yProps(1)}
                          style={{
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            fontFamily: 'jua',
                            color: value === 1 ? '#1976D2' : 'black',
                          }}
                        />
                      </div>
                      <div className="align-left" onClick={() => handleChange(2)}>
                        <Tab
                          label="글 선택하기"
                          {...a11yProps(2)}
                          style={{
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            fontFamily: 'jua',
                            color: value === 2 ? '#1976D2' : 'black',
                          }}
                        />
                      </div>
                      <div className="align-left" onClick={() => handleChange(3)}>
                        <Tab
                          label="그림과 함께 책 읽기"
                          {...a11yProps(3)}
                          style={{
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            fontFamily: 'jua',
                            color: value === 3 ? '#1976D2' : 'black',
                          }}
                        />
                      </div>
                      <div className="align-left" onClick={() => handleChange(4)}>
                        <Tab
                          label="목소리와 함께 책 읽기"
                          {...a11yProps(4)}
                          style={{
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            fontFamily: 'jua',
                            color: value === 4 ? '#1976D2' : 'black',
                          }}
                        />
                      </div>
                      <div className="align-left" onClick={() => handleChange(5)}>
                        <Tab
                          label="동화책 공유"
                          {...a11yProps(5)}
                          style={{
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            fontFamily: 'jua',
                            color: value === 5 ? '#1976D2' : 'black',
                          }}
                        />
                      </div>
                      <div className="align-left" onClick={() => handleChange(6)}>
                        <Tab
                          label="한/영 모두 지원"
                          {...a11yProps(6)}
                          style={{
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            fontFamily: 'jua',
                            color: value === 6 ? '#1976D2' : 'black',
                          }}
                        />
                      </div>

                      <div className="align-left" onClick={() => handleChange(7)}>
                        <Tab
                          label=""
                          {...a11yProps(7)}
                          style={{
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            fontFamily: 'jua',
                          }}
                        />
                      </div>
                    </Tabs>
                  </div>
                  <div className="flex">
                    <div style={{ maxWidth: '450px' }}>
                      <TabPanel value={value} index={0}></TabPanel>
                      <TabPanel value={value} index={1}>
                        동화책 주인공을 설정합니다 생성된 두가지의 스토리 중 하나를 선택합니다
                      </TabPanel>
                      <TabPanel value={value} index={2}>
                        Item Three
                      </TabPanel>
                      <TabPanel value={value} index={3}>
                        Item Four
                      </TabPanel>
                      <TabPanel value={value} index={4}>
                        Item Five
                      </TabPanel>
                      <TabPanel value={value} index={5}>
                        Item Six
                      </TabPanel>
                      <TabPanel value={value} index={6}></TabPanel>
                    </div>
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
