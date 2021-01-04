import React, { Component } from "react";
import styled, { css } from "styled-components";
import Dashboard from '../Dashboard/Dashboard'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Timer from '../timer'


function HomeAttendance(props) {
  return (
    <Container>
      <LayoutDashboard>
        <Dashboard/>
      </LayoutDashboard>
      <Layoutnumpad>
        <Timer/>
        <div class="flex w-full flex-1  h-screen flex justify-center items-center text-white mt-8">
            <div class="h-full py-1 px-8 text-center">
              <div class="w-full max-w-sm">
                <div class="flex items-center border-b-2 border-yellow-500 py-2 mt-1">
                  <input
                    class="text-center appearance-none bg-transparent border-none w-full text-white text-3xl mr-3 py-1 px-2 leading-tight 
                    focus:outline-none"
                    type="number"
                    placeholder= " "
                  />
                </div>
                  <div class="text-center text-xs font-thin my-10">
                    <div class="px-2">
                      <div class="flex  text-3xl ">
                      <div  class="w-1/3 px-2  text-black hover:bg-yellow-300 rounded cursor-pointer my-auto py-2 ">
                        7
                      </div>
                      <div class="w-1/3 px-2   text-black hover:bg-yellow-300  rounded cursor-pointer my-auto py-2">
                        8
                      </div>
                      <div class="w-1/3 px-2   text-black hover:bg-yellow-300  rounded cursor-pointer my-auto py-2">
                        9
                      </div>
                      </div>
                    </div>
                      <div class="px-2 pt-6">
                        <div class="flex -mx-2  text-3xl">
                          <div class="w-1/3 px-2 text-black hover:bg-yellow-300 rounded cursor-pointer my-auto py-2">
                          4
                          </div>
                          <div class="w-1/3 px-2 text-black hover:bg-yellow-300 rounded cursor-pointer my-auto py-2">
                          5
                          </div>
                          <div class="w-1/3 px-2 text-black hover:bg-yellow-300 rounded cursor-pointer my-auto py-2">
                          6
                          </div>
                         </div>
                      </div>
                      <div class="px-2 pt-6">
                        <div class="flex -mx-2  text-3xl">
                          <div class="w-1/3 px-2 text-black hover:bg-yellow-300 rounded cursor-pointer my-auto py-2">
                            1
                         </div>
                          <div class="w-1/3 px-2 text-black hover:bg-yellow-300 rounded cursor-pointer my-auto py-2">
                            2
                          </div>
                          <div class="w-1/3 px-2 text-black hover:bg-yellow-300 rounded cursor-pointer my-auto py-2">
                            3
                          </div>
                        </div>
                      </div>
                      <div class="px-2 pt-6">
                        <div class="flex -mx-2  text-3xl">
                          <div class="w-1/3 px-2  text-black hover:bg-yellow-300 rounded cursor-pointer my-auto py-2">
                            C
                         </div>
                          <div class="w-1/3 px-2 text-black hover:bg-yellow-300 rounded cursor-pointer my-auto py-2">
                            0
                          </div>
                          <div class="w-1/3 px-2 text-black hover:bg-yellow-300 rounded cursor-pointer my-auto py-2">
                            <ArrowBackIcon/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  asdasdasd
                </div>
              </div>
      </Layoutnumpad>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(255,255,255,0.5);
  height: 100%vh;
  width: 100vw;
`;

const LayoutDashboard = styled.div`
  flex: 0.7 1 0%;
  background-color: rgba(255,214,107,1);
  display: flex;
  flex-direction: column;
  width: 100%vw;
`;

const Layoutnumpad = styled.div`
  flex: 0.3 1 0%;
  background-color: rgba(240, 240, 240,1);
  display: flex;
  flex-direction: column;
`;

export default HomeAttendance;
