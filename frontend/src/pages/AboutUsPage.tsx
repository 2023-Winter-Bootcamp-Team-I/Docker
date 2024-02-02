import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import mainPageImg from '@/assets/images/mainPageImg.png';
import createInfoPageImg from '@/assets/images/createInfoPage.png';
import koreanContentPageImg from '@/assets/images/koreanContentPageImg.png';
import englishContentPageImg from '@/assets/images/englishContentPageImg.png';
import shareImg from '@/assets/images/shareImg.png';
import storyChoiceImg from '@/assets/images/storyChoiceImg.png';
import myLibraryPageImg from '@/assets/images/myLibraryPageImg.png';

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
      <div className="flex flex-col">
        <div className="flex flex-col items-center text-[#000229] text-[3.2rem] font-[LM] -mb-32">
          <p className="mb-3">
            북그북그에서
            <br />
          </p>
          <p>책을 그려보세요 </p>
        </div>
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
              <div className="flex items-center mt-20">
                <TabPanel value={value} index={0}>
                  <img src={mainPageImg} className="h-96 w-[700px]"></img>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <img src={createInfoPageImg} className="h-96 w-[700px]"></img>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <img src={storyChoiceImg} className="h-96 w-[700px]"></img>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <img src={myLibraryPageImg} className="h-96 w-[700px]"></img>
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <img src={koreanContentPageImg} className="h-96 w-[700px]"></img>
                </TabPanel>
                <TabPanel value={value} index={5}>
                  <img src={englishContentPageImg} className="h-96 w-[700px]"></img>
                </TabPanel>
                <TabPanel value={value} index={6}>
                  <img src={shareImg} className="h-96 w-[700px]"></img>
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
                      sx={{ borderRight: 1, borderColor: 'divider', width: '400px' }}
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
                          동화책 주인공을 만들어보고,
                          <br></br>
                          <br></br>그 중에 좋아하는 스토리를 선택해봐요!
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
                        <div className="text-[1.3rem] font-[PR2] mr-6 pl-10 mb-4 mt-2">원하는 이야기를 골라봐요!</div>
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
                          인공지능이 그려준 그림과 함께 책을 읽어요
                        </div>
                      )}
                      <div className="align-left" onClick={() => handleChange(4)}>
                        <Tab
                          label="오디오북으로 듣기"
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
                        <div className="text-[1.3rem] font-[PR2] mr-6 pl-10 mb-4 mt-2">책을 읽어 줄 수도 있어요!</div>
                      )}

                      <div className="align-left" onClick={() => handleChange(5)}>
                        <Tab
                          label="영어로 바꿔 읽기"
                          {...a11yProps(6)}
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
                          한국어 영어 둘 다 듣고 읽을 수 있어요!
                        </div>
                      )}
                      <div className="align-left" onClick={() => handleChange(6)}>
                        <Tab
                          label="동화책 공유"
                          {...a11yProps(5)}
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            fontFamily: 'LM',
                            color: value === 6 ? '#001aff' : 'black',
                          }}
                        />
                      </div>
                      {value === 6 && (
                        <div className="text-[1.3rem] font-[PR2] mr-6 pl-10 mb-4 mt-2">
                          친구에게 내가 만든 책을 보여주세요
                        </div>
                      )}
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
